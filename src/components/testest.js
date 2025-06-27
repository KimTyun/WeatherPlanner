/*
const obj = {
   cod: '200',
   message: 0,
   cnt: 40,
   list: [
      {
         dt: 1751004000,
         main: {
            temp: 25.97,
            feels_like: 25.97,
            temp_min: 25.97,
            temp_max: 25.97,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1009,
            humidity: 75,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 2.62,
            deg: 79,
            gust: 2.72,
         },
         visibility: 10000,
         pop: 0.02,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-27 06:00:00',
      },
      {
         dt: 1751014800,
         main: {
            temp: 25.63,
            feels_like: 26.23,
            temp_min: 24.95,
            temp_max: 25.63,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 76,
            temp_kf: 0.68,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 98,
         },
         wind: {
            speed: 2.34,
            deg: 145,
            gust: 2.26,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-27 09:00:00',
      },
      {
         dt: 1751025600,
         main: {
            temp: 22.4,
            feels_like: 22.97,
            temp_min: 20.62,
            temp_max: 22.4,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 87,
            temp_kf: 1.78,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10n',
            },
         ],
         clouds: {
            all: 98,
         },
         wind: {
            speed: 2.38,
            deg: 202,
            gust: 2.32,
         },
         visibility: 10000,
         pop: 0.37,
         rain: {
            '3h': 0.45,
         },
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-27 12:00:00',
      },
      {
         dt: 1751036400,
         main: {
            temp: 20.24,
            feels_like: 20.8,
            temp_min: 20.24,
            temp_max: 20.24,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 95,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10n',
            },
         ],
         clouds: {
            all: 94,
         },
         wind: {
            speed: 1.68,
            deg: 163,
            gust: 1.88,
         },
         visibility: 10000,
         pop: 0.95,
         rain: {
            '3h': 0.51,
         },
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-27 15:00:00',
      },
      {
         dt: 1751047200,
         main: {
            temp: 20.72,
            feels_like: 21.38,
            temp_min: 20.72,
            temp_max: 20.72,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 97,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10n',
            },
         ],
         clouds: {
            all: 90,
         },
         wind: {
            speed: 2.52,
            deg: 166,
            gust: 2.47,
         },
         visibility: 10000,
         pop: 1,
         rain: {
            '3h': 2.6,
         },
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-27 18:00:00',
      },
      {
         dt: 1751058000,
         main: {
            temp: 20.03,
            feels_like: 20.62,
            temp_min: 20.03,
            temp_max: 20.03,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 97,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 4.36,
            deg: 164,
            gust: 5.16,
         },
         visibility: 10000,
         pop: 1,
         rain: {
            '3h': 0.65,
         },
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-27 21:00:00',
      },
      {
         dt: 1751068800,
         main: {
            temp: 19.7,
            feels_like: 20.31,
            temp_min: 19.7,
            temp_max: 19.7,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 2.91,
            deg: 166,
            gust: 2.88,
         },
         visibility: 10000,
         pop: 0.74,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-28 00:00:00',
      },
      {
         dt: 1751079600,
         main: {
            temp: 19.55,
            feels_like: 20.2,
            temp_min: 19.55,
            temp_max: 19.55,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1008,
            humidity: 101,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 1.78,
            deg: 206,
            gust: 1.72,
         },
         pop: 1,
         rain: {
            '3h': 0.87,
         },
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-28 03:00:00',
      },
      {
         dt: 1751090400,
         main: {
            temp: 19.61,
            feels_like: 20.29,
            temp_min: 19.61,
            temp_max: 19.61,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 1007,
            humidity: 102,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 0.76,
            deg: 62,
            gust: 0.72,
         },
         pop: 1,
         rain: {
            '3h': 1.16,
         },
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-28 06:00:00',
      },
      {
         dt: 1751101200,
         main: {
            temp: 19.86,
            feels_like: 20.54,
            temp_min: 19.86,
            temp_max: 19.86,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 1007,
            humidity: 101,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 0.94,
            deg: 31,
            gust: 1.11,
         },
         pop: 0.69,
         rain: {
            '3h': 0.35,
         },
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-28 09:00:00',
      },
      {
         dt: 1751112000,
         main: {
            temp: 21,
            feels_like: 21.61,
            temp_min: 21,
            temp_max: 21,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 1007,
            humidity: 94,
            temp_kf: 0,
         },
         weather: [
            {
               id: 500,
               main: 'Rain',
               description: 'light rain',
               icon: '10n',
            },
         ],
         clouds: {
            all: 94,
         },
         wind: {
            speed: 2.33,
            deg: 56,
            gust: 2.36,
         },
         visibility: 10000,
         pop: 0.32,
         rain: {
            '3h': 0.1,
         },
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-28 12:00:00',
      },
      {
         dt: 1751122800,
         main: {
            temp: 21.28,
            feels_like: 21.89,
            temp_min: 21.28,
            temp_max: 21.28,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 1006,
            humidity: 93,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 52,
         },
         wind: {
            speed: 2.58,
            deg: 87,
            gust: 2.7,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-28 15:00:00',
      },
      {
         dt: 1751133600,
         main: {
            temp: 20.49,
            feels_like: 21.1,
            temp_min: 20.49,
            temp_max: 20.49,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 1007,
            humidity: 96,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 76,
         },
         wind: {
            speed: 1.17,
            deg: 187,
            gust: 1.66,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-28 18:00:00',
      },
      {
         dt: 1751144400,
         main: {
            temp: 19.69,
            feels_like: 20.33,
            temp_min: 19.69,
            temp_max: 19.69,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1008,
            humidity: 100,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 70,
         },
         wind: {
            speed: 3.46,
            deg: 171,
            gust: 3.7,
         },
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-28 21:00:00',
      },
      {
         dt: 1751155200,
         main: {
            temp: 19.57,
            feels_like: 20.22,
            temp_min: 19.57,
            temp_max: 19.57,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1009,
            humidity: 101,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 86,
         },
         wind: {
            speed: 3.52,
            deg: 156,
            gust: 3.58,
         },
         visibility: 9372,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-29 00:00:00',
      },
      {
         dt: 1751166000,
         main: {
            temp: 20.01,
            feels_like: 20.73,
            temp_min: 20.01,
            temp_max: 20.01,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1009,
            humidity: 102,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 1.66,
            deg: 168,
            gust: 1.55,
         },
         visibility: 7487,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-29 03:00:00',
      },
      {
         dt: 1751176800,
         main: {
            temp: 20.61,
            feels_like: 21.34,
            temp_min: 20.61,
            temp_max: 20.61,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1007,
            humidity: 100,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 2.54,
            deg: 209,
            gust: 3.79,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-29 06:00:00',
      },
      {
         dt: 1751187600,
         main: {
            temp: 20.9,
            feels_like: 21.66,
            temp_min: 20.9,
            temp_max: 20.9,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1007,
            humidity: 100,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 66,
         },
         wind: {
            speed: 3.17,
            deg: 223,
            gust: 5.27,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-29 09:00:00',
      },
      {
         dt: 1751198400,
         main: {
            temp: 20.28,
            feels_like: 21,
            temp_min: 20.28,
            temp_max: 20.28,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1008,
            humidity: 101,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 60,
         },
         wind: {
            speed: 2.74,
            deg: 212,
            gust: 3.8,
         },
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-29 12:00:00',
      },
      {
         dt: 1751209200,
         main: {
            temp: 20.17,
            feels_like: 20.85,
            temp_min: 20.17,
            temp_max: 20.17,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1009,
            humidity: 100,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 3.11,
            deg: 181,
            gust: 3.38,
         },
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-29 15:00:00',
      },
      {
         dt: 1751220000,
         main: {
            temp: 20.32,
            feels_like: 21.02,
            temp_min: 20.32,
            temp_max: 20.32,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1009,
            humidity: 100,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 3.59,
            deg: 145,
            gust: 3.51,
         },
         visibility: 2745,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-29 18:00:00',
      },
      {
         dt: 1751230800,
         main: {
            temp: 20.13,
            feels_like: 20.78,
            temp_min: 20.13,
            temp_max: 20.13,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1010,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 82,
         },
         wind: {
            speed: 3.79,
            deg: 146,
            gust: 3.75,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-29 21:00:00',
      },
      {
         dt: 1751241600,
         main: {
            temp: 20.16,
            feels_like: 20.82,
            temp_min: 20.16,
            temp_max: 20.16,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1010,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 72,
         },
         wind: {
            speed: 4.39,
            deg: 162,
            gust: 4.83,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-30 00:00:00',
      },
      {
         dt: 1751252400,
         main: {
            temp: 20.53,
            feels_like: 21.15,
            temp_min: 20.53,
            temp_max: 20.53,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1010,
            humidity: 96,
            temp_kf: 0,
         },
         weather: [
            {
               id: 802,
               main: 'Clouds',
               description: 'scattered clouds',
               icon: '03d',
            },
         ],
         clouds: {
            all: 44,
         },
         wind: {
            speed: 3.73,
            deg: 192,
            gust: 5.15,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-30 03:00:00',
      },
      {
         dt: 1751263200,
         main: {
            temp: 20.67,
            feels_like: 21.33,
            temp_min: 20.67,
            temp_max: 20.67,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1010,
            humidity: 97,
            temp_kf: 0,
         },
         weather: [
            {
               id: 802,
               main: 'Clouds',
               description: 'scattered clouds',
               icon: '03d',
            },
         ],
         clouds: {
            all: 30,
         },
         wind: {
            speed: 5.28,
            deg: 213,
            gust: 8.45,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-30 06:00:00',
      },
      {
         dt: 1751274000,
         main: {
            temp: 20.7,
            feels_like: 21.38,
            temp_min: 20.7,
            temp_max: 20.7,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1010,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 801,
               main: 'Clouds',
               description: 'few clouds',
               icon: '02d',
            },
         ],
         clouds: {
            all: 15,
         },
         wind: {
            speed: 4.15,
            deg: 213,
            gust: 6.88,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-30 09:00:00',
      },
      {
         dt: 1751284800,
         main: {
            temp: 20.69,
            feels_like: 21.37,
            temp_min: 20.69,
            temp_max: 20.69,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 52,
         },
         wind: {
            speed: 2.67,
            deg: 188,
            gust: 2.79,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-30 12:00:00',
      },
      {
         dt: 1751295600,
         main: {
            temp: 20.64,
            feels_like: 21.34,
            temp_min: 20.64,
            temp_max: 20.64,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 801,
               main: 'Clouds',
               description: 'few clouds',
               icon: '02n',
            },
         ],
         clouds: {
            all: 24,
         },
         wind: {
            speed: 2.71,
            deg: 186,
            gust: 2.47,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-30 15:00:00',
      },
      {
         dt: 1751306400,
         main: {
            temp: 20.37,
            feels_like: 21.05,
            temp_min: 20.37,
            temp_max: 20.37,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 802,
               main: 'Clouds',
               description: 'scattered clouds',
               icon: '03n',
            },
         ],
         clouds: {
            all: 26,
         },
         wind: {
            speed: 3.31,
            deg: 174,
            gust: 3.07,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-06-30 18:00:00',
      },
      {
         dt: 1751317200,
         main: {
            temp: 20.28,
            feels_like: 20.92,
            temp_min: 20.28,
            temp_max: 20.28,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 802,
               main: 'Clouds',
               description: 'scattered clouds',
               icon: '03d',
            },
         ],
         clouds: {
            all: 27,
         },
         wind: {
            speed: 3.7,
            deg: 157,
            gust: 3.57,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-30 21:00:00',
      },
      {
         dt: 1751328000,
         main: {
            temp: 20.07,
            feels_like: 20.74,
            temp_min: 20.07,
            temp_max: 20.07,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1012,
            humidity: 100,
            temp_kf: 0,
         },
         weather: [
            {
               id: 802,
               main: 'Clouds',
               description: 'scattered clouds',
               icon: '03d',
            },
         ],
         clouds: {
            all: 26,
         },
         wind: {
            speed: 4.07,
            deg: 155,
            gust: 4.61,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-01 00:00:00',
      },
      {
         dt: 1751338800,
         main: {
            temp: 20.67,
            feels_like: 21.38,
            temp_min: 20.67,
            temp_max: 20.67,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1012,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 97,
         },
         wind: {
            speed: 2.78,
            deg: 205,
            gust: 3.16,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-01 03:00:00',
      },
      {
         dt: 1751349600,
         main: {
            temp: 20.95,
            feels_like: 21.66,
            temp_min: 20.95,
            temp_max: 20.95,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 803,
               main: 'Clouds',
               description: 'broken clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 83,
         },
         wind: {
            speed: 3.54,
            deg: 224,
            gust: 5.34,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-01 06:00:00',
      },
      {
         dt: 1751360400,
         main: {
            temp: 21.42,
            feels_like: 22.15,
            temp_min: 21.42,
            temp_max: 21.42,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1010,
            humidity: 97,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 95,
         },
         wind: {
            speed: 3.09,
            deg: 229,
            gust: 4.89,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-01 09:00:00',
      },
      {
         dt: 1751371200,
         main: {
            temp: 21.18,
            feels_like: 21.91,
            temp_min: 21.18,
            temp_max: 21.18,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1010,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 87,
         },
         wind: {
            speed: 2.01,
            deg: 174,
            gust: 1.95,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-07-01 12:00:00',
      },
      {
         dt: 1751382000,
         main: {
            temp: 21.32,
            feels_like: 22.07,
            temp_min: 21.32,
            temp_max: 21.32,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1010,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 2.55,
            deg: 161,
            gust: 2.45,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-07-01 15:00:00',
      },
      {
         dt: 1751392800,
         main: {
            temp: 20.82,
            feels_like: 21.52,
            temp_min: 20.82,
            temp_max: 20.82,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1010,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04n',
            },
         ],
         clouds: {
            all: 92,
         },
         wind: {
            speed: 3.95,
            deg: 158,
            gust: 3.61,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'n',
         },
         dt_txt: '2025-07-01 18:00:00',
      },
      {
         dt: 1751403600,
         main: {
            temp: 20.69,
            feels_like: 21.37,
            temp_min: 20.69,
            temp_max: 20.69,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1010,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 91,
         },
         wind: {
            speed: 3.89,
            deg: 160,
            gust: 3.47,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-01 21:00:00',
      },
      {
         dt: 1751414400,
         main: {
            temp: 20.31,
            feels_like: 20.98,
            temp_min: 20.31,
            temp_max: 20.31,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 99,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 95,
         },
         wind: {
            speed: 3.71,
            deg: 164,
            gust: 3.8,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-02 00:00:00',
      },
      {
         dt: 1751425200,
         main: {
            temp: 20.59,
            feels_like: 21.26,
            temp_min: 20.59,
            temp_max: 20.59,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1011,
            humidity: 98,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 4.18,
            deg: 196,
            gust: 5.73,
         },
         visibility: 10000,
         pop: 0,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-07-02 03:00:00',
      },
   ],
   city: {
      id: 1843561,
      name: 'Incheon',
      coord: {
         lat: 37.45,
         lon: 126.4161,
      },
      country: 'KR',
      population: 2654793,
      timezone: 32400,
      sunrise: 1750968914,
      sunset: 1751021954,
   },
}
*/
/*
 {
         dt: 1751004000,
         main: {
            temp: 25.97,
            feels_like: 25.97,
            temp_min: 25.97,
            temp_max: 25.97,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1009,
            humidity: 75,
            temp_kf: 0,
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'overcast clouds',
               icon: '04d',
            },
         ],
         clouds: {
            all: 100,
         },
         wind: {
            speed: 2.62,
            deg: 79,
            gust: 2.72,
         },
         visibility: 10000,
         pop: 0.02,
         sys: {
            pod: 'd',
         },
         dt_txt: '2025-06-27 06:00:00',
      },
*/
