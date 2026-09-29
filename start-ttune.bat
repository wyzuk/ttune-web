@echo off
title TTune - Nostalgic Bengali Music Player
echo Starting TTune local server...
start "" "http://localhost:8080"
python -m http.server 8080
