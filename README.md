# grz-stops

This is a simple script to download all [GRZ](http://prg-greiz.de) stops as [GTFS-compatible CSV](https://developers.google.com/transit/gtfs/reference/stops-file).

The script uses the following endpoint:

```
http://www.reiseauskunft.bahn.de/bin/query.exe/dny?performLocating=2&tpl=stop2json&look_stopclass=2147483647&look_minx={minx}&look_miny={miny}&look_maxx={maxx}&look_maxy={maxy}
```

It starts from bounding box `(11.5, 50.5, 12.5, 51)` and works down to smaller quadrants.


The script produces CSV output in the following format:

```
stop_id,stop_name,stop_lon,stop_lat,stop_code
"201110","Raitzhain, Ronneburg (Thür)",12.207064,50.866612,""
```

# Prerequisites

These scrips use PostGIS to filter stops belonging to administrative regions covered by the transport company.  
See [this project](https://github.com/highsource/postgis-verwaltungsgebiete) for a simple way to create a PostGIS database with administrative regions.

# Usage

## Windows

```
npm install
00-export-unfiltered-stops
01-filter-stops
```

# Disclaimer

Usage of this script may or may not be legal, use on your own risk.  
This repository provides only source code, no data.

# License

Source code is licensed under [BSD 2-clause license](LICENSE). No license and no guarantees implied on the produced data, produce and use on your own risk.