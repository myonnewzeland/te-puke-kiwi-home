#!/usr/bin/env bash
# Reassigns /public/images/*.webp bytes so filenames match visible content (Option A).
# Run from repo root: bash scripts/realign-gallery-images.sh
#
# Expects the pre-fix filenames on disk. Exits early if the hero was already renamed.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/public/images"
ST="$(mktemp -d)"
trap 'rm -rf "$ST"' EXIT

if [[ ! -d "$IMG" ]]; then
  echo "Missing $IMG" >&2
  exit 1
fi

if [[ ! -f "$IMG/te-puke-hostel-holiday-park-aerial-view.webp" ]]; then
  echo "Skipping: hero already uses te-puke-hostel-park-cabins-caravans (migration applied)." >&2
  echo "To re-run from a clean tree: git checkout HEAD -- public/images && bash scripts/realign-gallery-images.sh" >&2
  exit 0
fi

echo "Staging sources under $ST ..."

cp "$IMG/te-puke-hostel-holiday-park-aerial-view.webp" "$ST/campground.webp"
cp "$IMG/te-puke-hostel-holiday-park-grounds.webp" "$ST/pool.webp"
cp "$IMG/te-puke-holiday-park-aerial-view.webp" "$ST/laundry.webp"
cp "$IMG/te-puke-hostel-tv-lounge-common-area.webp" "$ST/tv_lounge.webp"
cp "$IMG/te-puke-hostel-bathroom-clean.webp" "$ST/pod_out.webp"
cp "$IMG/te-puke-hostel-ladies-bathroom-facilities.webp" "$ST/bath_3vanity.webp"
cp "$IMG/te-puke-hostel-garden-path.webp" "$ST/bath_4sink.webp"
cp "$IMG/te-puke-hostel-storage-area.webp" "$ST/pingpong.webp"
cp "$IMG/te-puke-hostel-caravan-row.webp" "$ST/comm_kitchen.webp"
cp "$IMG/te-puke-hostel-caravans-group-accommodation.webp" "$ST/caravan_group.webp"
cp "$IMG/te-puke-hostel-reception-desk.webp" "$ST/road_sign.webp"
cp "$IMG/te-puke-hostel-shared-bathroom-facilities.webp" "$ST/scullery.webp"
cp "$IMG/te-puke-hostel-kitchen-use-workers.webp" "$ST/cabin_two_beds.webp"
cp "$IMG/te-puke-hostel-outdoor-chairs-garden.webp" "$ST/reception_building.webp"
cp "$IMG/te-puke-hostel-pod-bed-setup.webp" "$ST/patio_lights.webp"
cp "$IMG/te-puke-hostel-tree-canopy-outdoors.webp" "$ST/cabin_studio.webp"
cp "$IMG/te-puke-hostel-evening-atmosphere.webp" "$ST/evening_sky.webp"
cp "$IMG/te-puke-hostel-sunset-golden-hour.webp" "$ST/sunset_gold.webp"
cp "$IMG/te-puke-hostel-premium-pods-accommodation.webp" "$ST/pod_interior.webp"

cd "$IMG"

echo "Renaming hero set (aerial → park-cabins-caravans) ..."
for suf in "" "-400w" "-800w" "-900w" "-1080w"; do
  src="te-puke-hostel-holiday-park-aerial-view${suf}.webp"
  dst="te-puke-hostel-park-cabins-caravans${suf}.webp"
  if [[ -f "$src" ]]; then
    mv "$src" "$dst"
  fi
done

echo "Applying content realignments ..."

cp "$ST/pool.webp" "te-puke-hostel-pool-area.webp"
cp "$ST/campground.webp" "te-puke-hostel-holiday-park-grounds.webp"
magick "te-puke-hostel-holiday-park-grounds.webp" -resize '800>' "te-puke-hostel-holiday-park-grounds-800w.webp"

cp "$ST/laundry.webp" "te-puke-hostel-laundry-room.webp"

cp "$ST/campground.webp" "te-puke-holiday-park-wide-view.webp"
rm -f "te-puke-holiday-park-aerial-view.webp"

cp "$ST/pod_out.webp" "te-puke-hostel-pod-exterior.webp"
cp "$ST/bath_3vanity.webp" "te-puke-hostel-bathroom-clean.webp"

cp "$ST/tv_lounge.webp" "te-puke-hostel-lounge-interior.webp"

cp "$ST/pingpong.webp" "te-puke-hostel-recreation-area.webp"

cp "$ST/comm_kitchen.webp" "te-puke-hostel-shared-kitchen.webp"
cp "$ST/scullery.webp" "te-puke-hostel-common-area.webp"
cp "$ST/scullery.webp" "te-puke-hostel-kitchen-facilities.webp"
cp "$ST/comm_kitchen.webp" "te-puke-hostel-kitchen-use-workers.webp"

cp "$ST/bath_4sink.webp" "te-puke-hostel-shared-bathroom-facilities.webp"

cp "$ST/cabin_two_beds.webp" "te-puke-hostel-dining-area.webp"

cp "$ST/caravan_group.webp" "te-puke-hostel-caravan-row.webp"
cp "$ST/road_sign.webp" "te-puke-holiday-park-entrance.webp"
cp "$ST/reception_building.webp" "te-puke-hostel-reception-building.webp"
rm -f "te-puke-hostel-reception-desk.webp"

cp "$ST/cabin_studio.webp" "te-puke-hostel-cabin-interior-bed.webp"

cp "$ST/campground.webp" "te-puke-hostel-morning-grounds.webp"
cp "$ST/campground.webp" "te-puke-hostel-night-calm.webp"
cp "$ST/campground.webp" "te-puke-holiday-park-lawn.webp"
cp "$ST/campground.webp" "te-puke-hostel-walkway-trees.webp"
cp "$ST/campground.webp" "te-puke-hostel-park-surroundings.webp"
cp "$ST/campground.webp" "te-puke-holiday-park-panorama.webp"
cp "$ST/campground.webp" "te-puke-hostel-garden-path.webp"

cp "$ST/evening_sky.webp" "te-puke-hostel-quiet-evening-outdoors.webp"
cp "$ST/evening_sky.webp" "te-puke-hostel-twilight-park.webp"
cp "$ST/evening_sky.webp" "te-puke-hostel-starry-night-park.webp"
cp "$ST/evening_sky.webp" "te-puke-hostel-night-lights.webp"

cp "$ST/sunset_gold.webp" "te-puke-hostel-sunset-silhouette.webp"
cp "$ST/sunset_gold.webp" "te-puke-hostel-dawn-light.webp"
cp "$ST/sunset_gold.webp" "te-puke-hostel-new-day-sunrise.webp"

cp "$ST/cabin_two_beds.webp" "te-puke-hostel-community-dinner.webp"
cp "$ST/comm_kitchen.webp" "te-puke-hostel-seasonal-workers-relaxing.webp"

cp "$ST/pod_interior.webp" "te-puke-hostel-pod-bed-setup.webp"
cp "$ST/patio_lights.webp" "te-puke-hostel-path-lanterns.webp"
cp "$ST/pool.webp" "te-puke-hostel-outdoor-chairs-garden.webp"
cp "$ST/pool.webp" "te-puke-hostel-garden-flowers.webp"
cp "$ST/campground.webp" "te-puke-hostel-morning-dew-garden.webp"

echo "Done. Verify with: npm run build"
