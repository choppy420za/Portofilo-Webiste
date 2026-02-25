import Foundation
import AVFoundation

let inputPath = "/Users/lonwabozimela/Documents/New project/media/lonwabo-showreel-2024.mov"
let outputPath = "/Users/lonwabozimela/Documents/New project/media/lonwabo-showreel-2024.mp4"

let inputURL = URL(fileURLWithPath: inputPath)
let outputURL = URL(fileURLWithPath: outputPath)

let asset = AVURLAsset(url: inputURL)

let preset = AVAssetExportPreset1920x1080

guard let exporter = AVAssetExportSession(asset: asset, presetName: preset) else {
    fputs("Failed to create export session for preset \(preset).\n", stderr)
    exit(1)
}

try? FileManager.default.removeItem(at: outputURL)

let supportedTypes = exporter.supportedFileTypes
if supportedTypes.contains(.mp4) {
    exporter.outputFileType = .mp4
} else if let first = supportedTypes.first {
    exporter.outputFileType = first
} else {
    fputs("No supported output file types for export session.\n", stderr)
    exit(1)
}

exporter.outputURL = outputURL
exporter.shouldOptimizeForNetworkUse = true

let semaphore = DispatchSemaphore(value: 0)
exporter.exportAsynchronously {
    semaphore.signal()
}
_ = semaphore.wait(timeout: .distantFuture)

switch exporter.status {
case .completed:
    print("Export completed: \(outputURL.path)")
case .failed:
    fputs("Export failed: \(exporter.error?.localizedDescription ?? "Unknown error")\n", stderr)
    exit(1)
case .cancelled:
    fputs("Export cancelled.\n", stderr)
    exit(1)
default:
    fputs("Export ended with status: \(exporter.status.rawValue)\n", stderr)
    exit(1)
}
