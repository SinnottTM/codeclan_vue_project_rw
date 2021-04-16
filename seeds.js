use Sol;
db.dropDatabase();

db.planets.insertMany([
    {
        name: "Mercury",
        position_from_sun: 1,
        distance_from_sun_km: 57910000,
        distance_from_sun_au: 0.387,
        equatorial_diameter_km: 4879,
        mass: "3.29 × 10^23 kg (0.06 Earths)",
        number_of_moons: 0,
        moon_names: {
            first: null,
            second: null,
        },
        orbit_distance_km: 57909227,
        orbit_distance_au: 0.39,
        orbit_period_days: 88,
        surface_temperature_max_celcius: 427,
        surface_temperature_min_celcius: -173,
        facts:{
            first: "Mercury has been known to humanity since ancient times and although its discovery date is unknown, the first mentions of the planet are believed to be around 3000 BC by the Sumerians.",
            second: "A year in Mercury is 88 days, yet a Mercury day is 176 Earth days.Mercury is nearly tidally locked to the Sun – also known as a gravitational lock – and over time this has slowed the rotation of the planet to almost match its orbit around the Sun.",
            third: "Mercury orbits so quickly around the Sun that early civilizations believed it was actually two different stars – one which appeared in the morning and another which appeared in the evening.",
            fourth: "Mercury is the smallest planet in the solar system with a diameter of 4, 879 km and is one of five planets that is visible to the naked eye.",
            fifth: "After the Earth, Mercury is the second densest planet.Despite its small size, Mercury is very dense because it is composed mainly of heavy metals and rock – the main characteristic of terrestrial planets.",
            sixth: "Mercury is named after the messenger of the Roman gods, who is also known as Hermes in Greek mythology.This is because of the speed in which Mercury orbits the Sun and the speed with which Mercury the Roman deity was able to deliver messages.",
            seventh: "Astronomers didn’t realize that Mercury was a planet until 1543 when Copernicus published his Sun- centered model of the Solar System – putting the Sun as the centre of the solar system rather than the previously believed centre, the Earth.",
            eighth: "The planet has just 38% of the gravity on Earth.This means that Mercury isn’t able to hold the atmosphere it has and it instead gets blown away by solar winds.However those same solar winds are also bringing in new gases, radioactive decay and dust from micrometeorites – replenishing the atmosphere.",ninth: "Mercury has no moons or rings because of its low gravity and lack of atmosphere.",
            tenth: "It was once believed that a planet called Vulcan existed between the orbit of Mercury and the Sun – however the existence of such a planet was never found.",
            eleventh: "The orbit of Mercury is an ellipse rather than circular.It has the most eccentric orbit in the solar system and the least circular of all of the planets, according to scientists and astronomers.",
            twelfth: "Mercury is only the second hottest planet.Venus, though farther from the Sun than Mercury, actually experiences higher temperatures.This is because Mercury has no atmosphere to regulate temperature and results in the most extreme temperature change of all the planets – ranging from - 170°C(-280°F) during the night to 430°C(800°F) during the day.",
            thirteenth: "Mercury does not experience any seasons.The axis of Mercury has the smallest tilt of all other planets, and this results in a lack of seasons on its surface.",
            fourteenth: "Mercury is the only planet which doesn’t rotate exactly once every year – instead rotating three times for every two orbits of the Sun.This is because it is nearly tidally locked to the Sun.",
            fifteenth: "The orbit of Mercury was important in proving Albert Einstein’s theory of General Relativity.",
            sixteenth: "Mercury has a large iron core that is around 40 % of its volume(compared to a core volume of 17 % for Earth) in its centre whose radius is 1800 to 1900 kilometers(1100 to 1180 miles).Scientists believe the core of Mercury is probably molten.",
            seventeenth: "The outer shell of Mercury is only 500 to 600 kilometers(310 to 375 miles) thick.Earth’s outer shell(the mantle and crust) is 2930 kilometers(1819 miles) thick.",
            eighteenth: "Mercury has a very thin atmosphere, which is made up of atoms from the surface of the planet that have been blown away by solar winds.As Mercury is so hot, these atoms quickly escape into space and so its atmosphere is constantly being replenished.",
            nineteenth: "Mercury has a weak magnetic field whose strength is about 1 % of the magnetic field on Earth.",
            twentieth: "Only two spacecraft have ever visited Mercury.It is difficult to reach the planet due to its proximity to the Sun and any spacecraft visiting would need to travel 91 million kilometers into the Sun’s gravitational potential well.The Mariner 10 visited during 1974 - 75, flying by Mercury three times and mapping half its surface.On March 24, 1975 it ran out of fuel and is still believed to be orbiting the Sun.The MESSENGER probe was launched in 2004 to explore Mercury’s high density, its geological history, the nature of its magnetic field and more.Another mission, BepiColombo, is to be launched in 2015 by the European Space Agency and Japan is expected to reach Mercury in 2019.",
            twenty_first: "Mercury has more craters and impact marks that any other planet.The surface is similar to that of the Moon, as unlike most planets, Mercury isn’t geologically active and cannot “self heal” from impacts with asteroids and comets.Most of the Mercurian craters are named after famous writers and artists.If a crater is larger than 250 km in diameter, it is known as a Basin.The largest Basin on Mercury, the Caloris Basin, is around 1, 550 km in diameter and was discovered by the Mariner 10."
            
        },
    },

    {
        name: "Venus",
        position_from_sun: 2,
        distance_from_sun_km: 108200000,
        distance_from_sun_au: 0.723,
        equatorial_diameter_km: 12104,
        mass: "4.87 × 10^24 kg (0.82 Earths)",
        number_of_moons: 0,
        moon_names: {
            first: null,
            second: null,
        },
        orbit_distance_km: 108209475,
        orbit_distance_au: 0.73,
        orbit_period_days: 225,
        surface_temperature_max_celcius: 462,
        surface_temperature_min_celcius: "see max",
        facts: {
            first: "Venus is the second brightest natural object in the sky. The planet has an apparent magnitude of -3.8 to -4.6, which makes it visible on a bright, clear day. The Moon is the only other natural object that is brighter.",
            second: "Venus is sometimes referred to as the “morning star” and “evening star”.This dates back to ancient civilizations who believed that Venus was in fact two distinct stars appearing in the sky.When the orbit of Venus overtakes Earth’s orbit, it changes from being visible at sunrise to being visible at sunset.They were known as Phosphorus and Hesperus by the Greeks, and Lucifer and Vesper by the Romans.",
            third: "One day on Venus is longer than one year. Due to the slow rotation on its axis, it takes 243 Earth-days to complete one rotation. The orbit of the planet takes 225 Earth-days – making a year on Venus shorter on day on Venus.",
            fifth: "Venus is named after the Roman goddess of love and beauty. This may be, in part, due the brightness of the planet and may date back to the Babylonians in 1581 who referred to Venus as 'bright queen of the sky'.",
            sixth: "Venus is sometimes called Earth’s sister planet. This is because their size is very similar (there is only a 638 km different in diameter) and Venus has around 81% of Earth’s mass. They are also similarly located with Venus being the closest planet to Earth. Both planets also have a central core, a molten mantle and a crust.",
            seventh: "Venus has no moons nor rings.",
            eighth: "Billions of years ago, the climate of Venus may been similar to that of Earth and scientists believe that Venus once possessed large amounts of water or oceans. However, due to the high temperatures produce from the extreme greenhouse effect, this water boiled off long ago and the surface of the planet is now too hot and hostile to sustain life.", 
            ninth: "Venus rotate in the opposite direction to other planets. Most other planets rotate counter-clockwise on their axis, however Venus, like Uranus, rotates clockwise. This is known as a retrograde rotation and may have been caused by a collision with an asteroid or other object which caused the planet to change its rotational path.",
            tenth: "Venus is the hottest planet in the solar system with an average surface temperature of 462°C (863°F). Also, Venus doesn’t tilt on its axis which means there are no seasons either. The atmosphere is a dense 96.5% carbon dioxide which traps heat and caused the greenhouse effect which evaporated any water sources billions of years ago.",
            eleventh: "The temperature on Venus doesn’t vary much between the night and day. This is due to the slow movement of the solar winds across the surface of the planet.",
            twelfth: "The estimated age of the Venusian surface is around 300-400 million years old. By comparison, the surface of the Earth is about 100 million years old.",
            thirteenth: "The atmospheric pressure of Venus is 92 times stronger than Earth’s. This means that any small asteroids entering the atmosphere of Venus are crushed by the immense pressure, which is why there are no small surface craters on the planet. This pressure is equivalent to being around 1,000 km under Earth’s oceans.",
            fourteenth: "Venus has a very weak magnetic field. This surprised scientists, who expected Venus to have a magnetic field similar in strength to Earth’s. One possible reason for this is that Venus has no solid inner core, or that its core is not cooling.",
            fifteenth: "Venus is the only planet in the Solar System to be named after a female figure.",
            sixteenth: "Venus orbits the sun in an ellipse, but its orbit is the closest to being a circle out of all the planets in the Solar System.",
            seventeenth: "Venus is the closest planet to Earth. When Venus is in line with Earth and the Sun, it is the closest planet to us, at an average distance of 41 million kilometers (25.5 million miles) away.",


        },
    },

]);