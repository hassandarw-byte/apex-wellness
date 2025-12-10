#!/bin/bash
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/hassandarw-byte/apex-wellness.git
git branch -M main
git push -u origin main --force 2>&1 | tail -5
