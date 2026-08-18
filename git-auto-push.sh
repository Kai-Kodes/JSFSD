#!/bin/bash

cd /home/redsheronin/Files/Coding/College/FSD/CSE-21/JS/ || exit 1

while true; do
    if [[ -n $(git status --porcelain) ]]; then
        git add .
        git commit -m "Auto-update $(date '+%Y-%m-%d %H:%M:%S')"
        git push origin main
    fi

    sleep 60
done
