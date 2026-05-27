#!/usr/bin/env bash
set -euo pipefail
# Run Next build via WSL-native node so node_modules symlinks resolve.
# The default `npm` on PATH is the Windows install (visible to WSL via interop)
# and chokes on UNC paths.
export PATH="/home/faraz/.nvm/versions/node/v24.15.0/bin:$PATH"
cd "$(dirname "$0")/.."
exec npm run build
