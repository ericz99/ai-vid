import {
  downloadWhisperModel,
  installWhisperCpp,
} from "@remotion/install-whisper-cpp";

import {
  WHISPER_MODEL,
  WHISPER_VERSION,
  WHISPER_PATH,
} from "./whisper-config.mjs";

await installWhisperCpp({ to: WHISPER_PATH, version: WHISPER_VERSION });
await downloadWhisperModel({ folder: WHISPER_PATH, model: WHISPER_MODEL });
