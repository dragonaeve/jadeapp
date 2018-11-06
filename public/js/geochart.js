      google.charts.load('current', {
        'packages': ['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['State', 'Incidents per 100,000 Population'],
          ['Alabama', 100000 * 5471 / 4863300],
          ['Alaska', 100000 * 1349 / 741894],
          ['Arizona', 100000 * 2328 / 6931071],
          ['Arkansas', 100000 * 2842 / 2988248],
          ['California', 100000 * 16306 / 39250017],
          ['Colorado', 100000 * 3201 / 5540545],
          ['Connecticut', 100000 * 3067 / 3576452],
          ['Delaware', 100000 * 1685 / 952065],
          ['District of Columbia', 100000 * 3195 / 681170],
          ['Florida', 100000 * 15029 / 20612439],
          ['Georgia', 100000 * 8925 / 10310371],
          ['Hawaii', 100000 * 289 / 1428557],
          ['Idaho', 100000 * 661 / 1683140],
          ['Illinois', 100000 * 17556 / 12801539],
          ['Indiana', 100000 * 5852 / 6633053],
          ['Iowa', 100000 * 2517 / 3134693],
          ['Kansas', 100000 * 2145 / 2907289],
          ['Kentucky', 100000 * 4157 / 4436974],
          ['Louisiana', 100000 * 8103 / 4681666],
          ['Maine', 100000 * 907 / 1331479],
          ['Maryland', 100000 * 5798 / 6016447],
          ['Massachusetts', 100000 * 5981 / 6811779],
          ['Michigan', 100000 * 6136 / 9928300],
          ['Minnesota', 100000 * 2408 / 5519952],
          ['Mississippi', 100000 * 3599 / 2988726],
          ['Missouri', 100000 * 6631 / 6093000],
          ['Montana', 100000 * 638 / 1042520],
          ['Nebraska', 100000 * 1651 / 1907116],
          ['Nevada', 100000 * 1952 / 2940058],
          ['New Hampshire', 100000 * 964 / 1334795],
          ['New Jersey', 100000 * 5387 / 8944469],
          ['New Mexico', 100000 * 1645 / 2081015],
          ['New York', 100000 * 9712 / 19745289],
          ['North Carolina', 100000 * 8739 / 10146788],
          ['North Dakota', 100000 * 573 / 757952],
          ['Ohio', 100000 * 10244 / 11614373],
          ['Oklahoma', 100000 * 3455 / 3923561],
          ['Oregon', 100000 * 2286 / 4093465],
          ['Pennsylvania', 100000 * 8929 / 12784227],
          ['Rhode Island', 100000 * 895 / 1056426],
          ['South Carolina', 100000 * 6939 / 4961119],
          ['South Dakota', 100000 * 544 / 865454],
          ['Tennessee', 100000 * 7626 / 6651194],
          ['Texas', 100000 * 13577 / 27862596],
          ['Utah', 100000 * 1072 / 3051217],
          ['Vermont', 100000 * 472 / 624594],
          ['Virginia', 100000 * 5949 / 8411808],
          ['Washington', 100000 * 3434 / 7288000],
          ['West Virginia', 100000 * 1575 / 1831102],
          ['Wisconsin', 100000 * 4787 / 5778708],
          ['Wyoming', 100000 * 494 / 585501]
        ]);

        var options = {
          title: 'Number of Incidents per State per 100,000 People',
          region: 'US',
          displayMode: 'regions',
          resolution: 'provinces',
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
