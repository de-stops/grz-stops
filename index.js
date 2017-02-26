const exportStops = require("hafas-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "http://www.reiseauskunft.bahn.de/bin/query.exe/dny?performLocating=2&tpl=stop2json&look_stopclass=2147483647&look_minx={minx}&look_miny={miny}&look_maxx={maxx}&look_maxy={maxy}";

exportStops(ENDPOINT_BASE_URL_TEMPLATE, "ISO-8859-1", 11.5, 50.5, 12.5, 51, null, [51, 54, 80, 81, 82, 83, 84, 85, 86, 87, 88, 6080, 6180, 6280, 6380, 6480]);
