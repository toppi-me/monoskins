#!/bin/sh
set -e

for source in public/skin/*.png; do
  name="${source%.png}"

  for width in 400 800; do
    magick "$source" -resize "${width}x>" -quality 80 "$name-$width.webp"
  done
done
