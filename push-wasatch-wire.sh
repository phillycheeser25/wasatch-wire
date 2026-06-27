#!/bin/bash
# Wasatch Wire — push script
# Run this from Terminal: bash ~/Claude/Projects/ncaa/push-wasatch-wire.sh
cd ~/Claude/Projects/ncaa
rm -f .git/index.lock
git add .
git commit -m "Wasatch Wire update: $(date '+%Y-%m-%d %H:%M')"
git push
echo "Done. Site will rebuild on GitHub Pages in ~1 minute."
