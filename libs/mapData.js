//Response Generator with token

exports.getMapData = function(){

	var myResponse = 
                [
                		{
                			'name' 	:  'Azkaban',
                			'type'	:  'place', 
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/azkaban.jpg',
                			'lat'   :  '60.793689',
                			'lon'   :  '-0.241699',
                			'abt'	:  'Azkaban is a fortress on an island in the middle of the North Sea. It serves the magical community of Great Britain as a prison for convicted criminals. Azkaban was built in the 15th century and it has been in use as a detention facility since 1718. Using certain Charms, Azkaban is hidden from the Muggle world, and is Unplottable.'
                		},

                		{
                			'name' 	:  'Hogwarts School of Witchcraft and Wizardry',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/hogwarts.jpg',
                			'lat'   :  '56.598437',
                			'lon'   :  '-4.218750',
                			'abt'	:  'Hogwarts School of Witchcraft and Wizardry is the British wizarding school, located in the Highlands of Scotland. It takes students from the United Kingdom of Great Britain and Northern Ireland, and Ireland.The castle is located in the mountains near a loch. The precise location of the school can never be uncovered because it was rendered Unplottable.'
                		},

                		{
                			'name' 	:  'The Cave',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/cave.png',
                			'lat'   :  '52.161824',
                			'lon'   :  '1.521606',
                			'abt'	:  "The Cave was the cave by the sea where Tom Riddle was taken as a child. As Lord Voldemort, he later used the cave to hide Salazar Slytherin's Locket, one of his Horcruxes. The cave was used again when Regulus Black stole the original locket and when Albus Dumbledore and Harry Potter went searching for it."
                		},

                		{
                			'name' 	:  'Hogsmeade Village',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/hogsmeade.jpg',
                			'lat'   :  '56.593437',
                			'lon'   :  '-4.214750',
                			'abt'	:  "Hogsmeade Village, or simply called Hogsmeade, is the only all-wizarding village in Britain. It was founded by Hengist of Woodcroft who was in Hufflepuff. Since before 1714 (when the 1714 Edict was passed), Hogwarts third years and above have been permitted weekend trips into the village.[1] Mainly, students frequent the High Street in the village which contains the named specialty shops and pubs such as Zonko's Joke Shop and Honeydukes. Otherwise, they wander on to observe the infamous Shrieking Shack.Hogsmeade is a picturesque little village of cottages and shops, with enchanted candles hanging in the trees during the holidays. It is also near the location of the train station used by the Hogwarts Express."
                		},


                		{
                			'name' 	:  'The Forbidden Forest',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/forest.jpg',
                			'lat'   :  '56.598287',
                			'lon'   :  '-4.219750',
                			'abt'	:  "The Forbidden Forest, also known as Dark Forest borders the edges of the Hogwarts School of Witchcraft and Wizardry grounds.The forest is a very old place that holds many secrets and houses many creatures, some dark and Dangerous, others friendly. The trees in the forest are considered ancient, they are dense and rough looking from years of exposure to the elements.As the forest's name suggests, it is strictly off limits to students — except in the case of detention, or Care of Magical Creatures lessons that occasionally take place there. Of course, with the various dangerous creatures living in the Forest, few students would even want to venture into it. Black flowers are known to grow in the forest."
                		},


                		{
                			'name' 	:  'Hogwarts Quidditch Ground',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/quidditch.jpg',
                			'lat'   :  '56.590437',
                			'lon'   :  '-4.211750',
                			'abt'	:  'Hogwarts has its own Quidditch pitch where Quidditch teams could practise, hold try-outs and play matches against each other. Each year will see a total of six inter-house matches (each house competing for the Quidditch Cup), along with numerous training sessions by each house team.'
                		},

                		{
                			'name' 	:  'Montrose Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/montrose.png',
                			'lat'   :  '57.138847',
                			'lon'   :  '-2.109375',
                			'abt'	:  'The Montrose Magpies are a Quidditch team that play in the British and Irish Quidditch League. The team is the most successful in League history, having won the League Cup thirty-two times and the European Cup twice.The team colours of the Magpies are black and white, and their playing robes are black and white with one magpie on the chest, and another on the back.'
                		},

                		{
                			'name' 	:  'Pride of Portree Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/portree.png',
                			'lat'   :  '57.400214',
                			'lon'   :  '-6.130371',
                			'abt'	:  'Pride of Portree are a Quidditch team that play in the British and Irish Quidditch League. Formed in 1292, the team is based in the small town of Portree, which is located on the Isle of Skye, an island of the Inner Hebrides.Fans of the Pride of Portree commonly refer to the team as the "Prides", and their playing robes are purple with a gold star emblazoned on the chest. Pride of Portree have won the League Cup at least twice.'
                		},

                		{
                			'name' 	:  'Ballycastle_Bats Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Ballycastle_Bats.png',
                			'lat'   :  '55.194156',
                			'lon'   :  '-6.306152',
                			'abt'	:  'The Ballycastle Bats were a Quidditch team located in Northern Ireland and were the second most successful team in the British and Irish Quidditch League, having won the title twenty-seven times nearing the end of the 20th century. Their robes were black with scarlet bat logos. They had a famous mascot, Barny the Fruitbat, who was also featured in Butterbeer advertisements. A member of this team was Finbar Quigley.'
                		},

                		{
                			'name' 	:  'Kenmare Kestrels Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Kenmare_Kestrels.png',
                			'lat'   :  '51.661908',
                			'lon'   :  '-9.426270',
                			'abt'	:  'The Kenmare Kestrels are an Irish Quidditch team from the town of Kenmare, County Kerry, in the South of Ireland, that plays in the British and Irish Quidditch League. Founded in 1291, they have leprechauns as mascots, and their fans also sometimes play the harp at matches. Their robes are emerald-green with two yellow "K"s back to back on the chest.'
                		},

                		{
                			'name' 	:  'Holyhead Harpies Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/sticker.png',
                			'lat'   :  '53.083714',
                			'lon'   :  '-4.174805',
                			'abt'	:  'The Holyhead Harpies is an all-female Quidditch team that plays in the British and Irish Quidditch League. The team is based in the town of Holyhead, which is located in the northwest of Wales. The team was founded in 1203, making them the second-oldest team in the league.The Harpies playing robes are dark green with a gold talon emblazoned on the chest. They are unique among Quidditch teams in that they only hire women to play for them.'
                		},

                		{
                			'name' 	:  'Wigtown Wanderers Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Wigtown_Wanderers_2.png',
                			'lat'   :  '54.828777',
                			'lon'   :  '-4.130859',
                			'abt'	:  'The Wigtown Wanderers are a Quidditch team that plays in the British and Irish Quidditch League. The team is based in Wigtown, which is located in southwest Scotland. Founded in 1422, their playing robes are blood red with a silver meat cleaver emblazoned on the chest.The original Wanderers were the seven children (four sons, three daughters) of local butcher Walter Parkin.'
                		},

                		{
                			'name' 	:  'Appleby Arrows Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/appleby_arrows_by_pako_speedy-d46r729.png',
                			'lat'   :  '54.126638',
                			'lon'   :  '-2.724609',
                			'abt'	:  'The Appleby Arrows are a Quidditch team from either: Appleby, a village in northern England; or more probably, Appleby-in-Westmorland (which was known only as Appleby until 1974), a town in northern England. The Arrows play in the British and Irish Quidditch League. Founded in 1612, the Arrows play in robes of pale blue, emblazoned with a silver arrow. There is traditionally fierce rivalry between the Arrows and the Wimbourne Wasps.'
                		},

                		{
                			'name' 	:  'Chudley Cannons Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/ChudleyCannons.png',
                			'lat'   :  '50.404579',
                			'lon'   :  '-3.537598',
                			'abt'	:  'The Chudley Cannons are a British Quidditch team that played in the British and Irish Quidditch League and, in 1972, participated in the International Quidditch Tournament. They wear bright orange robes, and their logo includes two black Cs and a speeding cannonball. They have won the League Cup twenty-one times, the last time in 1892; many consider their glory days to be over. There is a Chudley Cannons Fan Club.'
                		},

                		{
                			'name' 	:  'The Burrow',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/burrow.jpg',
                			'lat'   :  '50.703199',
                			'lon'   :  '-3.328857',
                			'abt'	:  'The Burrow was the family home of the Weasley family, located on the outskirts of Ottery St Catchpole in Devon England. It was a thoroughly magical dwelling that became a second home to Harry Potter. A barn stood nearby.The Burrow was held up with magic and was very cluttered inside, but very welcoming at the same time. It was also stated that it was quite near to the Lovegood House.'
                		},

                		{
                			'name' 	:  "Godric's Hollow",
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/hollow.jpg',
                			'lat'   :  '51.022178',
                			'lon'   :  '-3.801270',
                			'abt'	:  "Godric's Hollow is a village in the West Country of England. It is a small community, which centres on a village square with only a church, a post office, a pub, and a few retail shops. The residential streets are lined with quaint cottages, and an area called Church Lane that leads up to the church.Godric's Hollow has been inhabited by a number of notable wizarding families. The Dumbledore family and Bathilda Bagshot both resided in the village. It is perhaps most famous as where Harry Potter and his parents lived when he was a baby, where they were murdered, and Lord Voldemort met his first downfall."
                		},

                		{
                			'name' 	:  'Wimbourne Wasps Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/wimbourne_wasps_by_pako_speedy-d47haeb.png',
                			'lat'   :  '50.591738',
                			'lon'   :  '-2.230225',
                			'abt'	:  'The Wimbourne Wasps were a Quidditch team in the British and Irish Quidditch League, based in the town of Wimbourne, Dorset. Founded in 1312, their robes are horizontal yellow and black stripes with a wasp on the chest. The team has won the League Cup at least eighteen times, and have twice been semi-finalists in the European Cup.'
                		},

                		{
                			'name' 	:  'The Forest of Dean',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/forest2.jpg',
                			'lat'   :  '51.655013',
                			'lon'   :  '0.144196',
                			'abt'	:  'The Forest where Harry and Hermoine hid after Nagini attacked them.'
                		},

                		{
                			'name' 	:  'Tutshill Tornados Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/tutshill_tornados_by_pako_speedy-d47mphy.png',
                			'lat'   :  '51.925426',
                			'lon'   :  '-2.241211',
                			'abt'	:  'The Tutshill Tornados are a Quidditch team that plays in the British and Irish Quidditch League. The team is based in the village of Tutshill, which is located in the west of England, near the Welsh border town of Chepstow. Founded in 1520, the team colours and their playing robes are sky blue with a dark blue Double-T on the chest.'
                		},

                		{
                			'name' 	:  'Little Whinging',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Littlewhinging1.jpg',
                			'lat'   :  '51.222153',
                			'lon'   :  '0.164795',
                			'abt'	:  'Little Whinging is a town in the English county of Surrey. Little Whinging is the home of Harry Potter, the Dursleys, and Arabella Figg. Dementors attacked Harry Potter and his cousin here in 1995.'
                		},


                		{
                			'name' 	:  "Spinner's End",
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/spinnersend.jpg',
                			'lat'   :  '51.505773',
                			'lon'   :  '-0.005236',
                			'abt'	:  "Spinner's End is a street on which the childhood home of Severus Snape is located. It is stated to be one of several streets lined with deserted brick houses and broken streetlamps, near a dirty river and an abandoned mill with a tall chimney. It is located in Cokeworth.[1]The Spinner in the street name likely refers to the involvement of the local inhabitants in textile production, most likely cotton or wool spinning. It might also allude to the spider-like facets of Severus Snape's character. The End has a morbid quality and could also hint at post-industrial decline.Spinner's End is located near the childhood home of the Evans family, where Petunia Dursley and Lily Potter grew up, as revealed through Snape's memories to Harry Potter in 1998. While the Black sisters were there, Bellatrix deemed it a 'muggle dunghill'."
                		},

                		{
                			'name' 	:  'Privet Drive',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/number-four-privet-drive-harry-potter-house.jpg',
                			'lat'   :  '51.226865',
                			'lon'   :  '0.174811',
                			'abt'	:  'Privet Drive is a suburban street in Little Whinging, which is located in the county of Surrey, near London in the southeast of England. The neighbourhood consists of a number of boring, boxy houses with gardens at the front and back.The Dursleys lived on this street, in Number Four. Neighbours included 3 Privet Drive and 11 Privet Drive. '
                		},

                		{
                			'name' 	:  'The Zoo',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Dudley_trapped_PS_1.png',
                			'lat'   :  '51.225865',
                			'lon'   :  '0.176811',
                			'abt'	:  "This is the Zoo where Harry meets the snake and sets it free on Dudley's Birthday."
                		},

                		{
                			'name' 	:  'The Far Away Lake',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../images/pexels-photo-346529.jpeg',
                			'lat'   :  '52.858559',
                			'lon'   :  '0.318604',
                			'abt'	:  "After getting fed up with the letters , Mr.Dursley moves with his family to this far away lake where Hagrid meets Harry later."
                		},

                		{
                			'name' 	:  "Hagrid's Hut",
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/article-0-0047342400000258-507_468x367.jpg',
                			'lat'   :  '56.598437',
                			'lon'   :  '-4.318750',
                			'abt'	:  "Hagrid's Hut served as a home to Rubeus Hagrid (and some of his pets, including Fang) during his years as gatekeeper and teaching at Hogwarts School of Witchcraft and Wizardry. It is a small wooden cabin located outside of Hogwarts Castle, on the edge of the Forbidden Forest. Harry Potter, Hermione Granger and Ron Weasley were amongst the Hogwarts students who regularly visited Hagrid in his hut."
                		},

                		{
                			'name' 	:  'Falmouth Falcons Quidditch Team',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Falmouth.png',
                			'lat'   :  '50.236226',
                			'lon'   :  '-3.537598',
                			'abt'	:  'The Falmouth Falcons are a Quidditch team that plays in the British and Irish Quidditch League. The team is based in the town of Falmouth, which is located in the southwest of England.The Falcons play in robes of dark grey and white with a falcon emblem on the chest. They are known for their fierce and violent style of play. In fact, they are so violent, that the team motto is: Let us win, but if we cannot win, let us break a few heads. The Broadmoor brothers, Karl and Kevin, who played as Beaters between 1958 and 1969, were suspended on no less than fourteen occasions due to persistent rule-breaking.'
                		},

                		{
                			'name' 	:  'Malfoy Manor',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/2647331_orig.jpg',
                			'lat'   :  '51.349200',
                			'lon'   :  '-1.992710',
                			'abt'	:  'Malfoy Manor is the home of the wealthy pure-blood Malfoy family, located in Wiltshire, England. It was mainly used as the base of operations for Lord Voldemort and the Death Eaters during the Second Wizarding War, much to the immense discomfort of Lucius, Narcissa, and Draco Malfoy.'
                		},

                		{
                			'name' 	:  'The Ministry of Magic',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/Ministrybreakin1.png',
                			'lat'   :  '51.504687',
                			'lon'   :  '-0.126452',
                			'abt'	:  "The Ministry of Magic (M.o.M.) is the main governing body of the magical community of Great Britain (i.e. England, Scotland and Wales) and Ireland with the intention of preservation of magical law. The Ministry connects the British government to the wizarding world. The headquarters of the Ministry are in Whitehall, in central London, deep underground. It is headed by the Minister for Magic. As of 2019, the Minister of Magic is Hermione Granger. Each Prime Minister of Great Britain is visited by the Minister for Magic. During the height of the Dark Lord's power, the Minister for Magic worked with the Muggle Prime Minister to ensure protection for the Muggle world."
                		},

                		{
                			'name' 	:  'Lovegood House',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/LovegoodHouse.jpg',
                			'lat'   :  '50.750930',
                			'lon'   :  '-3.278745',
                			'abt'	:  "The Lovegood House is a black-coloured cylindrical house on top of a hill with a stream at the base of it, it is located near the village of Ottery St Catchpole. It is the home of Xenophilius Lovegood and his daughter Luna. It is described as looking like a giant chess rook (otherwise known as a castle)."
                		},

                		{
                			'name' 	:  'Gringotts Wizarding Bank',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/WB_F1_Gringotts_HarryAndHagridEnterGringotts_2431.jpg',
                			'lat'   :  '51.514087',
                			'lon'   :  '-0.128403',
                			'abt'	:  "Gringotts Wizarding Bank is the only bank of the wizarding world, and is owned and operated by goblins. It was created by a goblin called Gringott, in 1474. Its main offices are located around the North Side of Diagon Alley in London, England. In addition to storing money and valuables for wizards and witches, one can go there to exchange Muggle money for wizarding money. The currency exchanged by Muggles is later returned to circulation in the Muggle world by goblins. According to Rubeus Hagrid, other than Hogwarts School of Witchcraft and Wizardry, Gringotts is the safest place in the wizarding world."
                		},

                		{
                			'name' 	:  'Little Hangleton',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/hangleton.jpg',
                			'lat'   :  '54.625562',
                			'lon'   :  '-3.240967',
                			'abt'	:  "Little Hangleton is a small village in Yorkshire which the most prominent family living was the Riddles. The village is near the larger community of Great Hangleton and is about 200 miles away from Little Whinging. The pure-blood wizarding family, the Gaunts, lived just outside Little Hangleton in a shack."
                		},

                		{
                			'name' 	:  'Diagon Alley',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/landscape-1500539435-diagon-alley.jpg',
                			'lat'   :  '51.511492',
                			'lon'   :  '-0.128388',
                			'abt'	:  "Diagon Alley is a cobblestoned wizarding alley and shopping area located in London, England behind a pub called the Leaky Cauldron. Inside the alley is an assortment of restaurants, shops, and other sights. All items on the Hogwarts supply list can be bought at Diagon Alley. The alley is completely hidden from the Muggle world which is right outside of its boundaries. It is very large in area and essentially the centre of wizarding London."
                		},

                		{
                			'name' 	:  'The HeadQuarters of the Order of Phoenix',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/headquarters.jpg',
                			'lat'   :  '51.513198',
                			'lon'   :  '-0.131063',
                			'abt'	:  "12 Grimmauld Place was the ancestral home of the Black family, located in the Borough of Islington, London, in a Muggle neighbourhood, and the location was protected by a Fidelius Charm. As the house was invisible to the neighbourhood residents, the local Muggles have long since accepted the mistake in numbering which landed number 13 next to number 11.In 1995, the home became the headquarters for the Order of the Phoenix with the consent of Sirius Black, with Albus Dumbledore becoming Secret-Keeper. After Dumbledore's death in 1997, everyone in whom he confided the location of 12 Grimmauld Place to became a Secret-Keeper."
                		},

                		{
                			'name' 	:  'Platform Nine and Three Quarters',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/platform.jpg',
                			'lat'   :  '52.303847',
                			'lon'   :  '-0.676628',
                			'abt'	:  "Platform Nine and Three-Quarters (Platform 9¾) is a platform at King's Cross Station in London. Magically concealed behind the barrier between Muggle Platforms Nine and Ten, this Platform is where Hogwarts School of Witchcraft and Wizardry students board the Hogwarts Express on 1 September, in order to attend school.In order for someone to get onto Platform Nine and Three-Quarters, they must walk directly at the apparently solid metal ticket box dividing Platforms Nine and Ten. There is a guard stationed just outside the entrance, in order to regulate entries and exits from the platform."
                		},


                		{
                			'name' 	:  'The Quidditch Trillenium Stadium',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/stadium.jpg',
                			'lat'   :  '50.571886',
                			'lon'   :  '-3.920688',
                			'abt'	:  "The Quidditch Trillenium Stadium[1], known also as the Quidditch World Cup Stadium[2] was built for the 422nd Quidditch World Cup in 1994. Built in the middle of a large deserted moor in Dartmoor, the Quidditch stadium was capable of holding 100,000 wizards at once, with halls draped in scarlet. A task force of 500 from the Ministry of Magic spent months preparing for it, first finding the site, then preparing it for the Quidditch World Cup. There were many different Muggle-Repelling Charms on it, such as causing the Muggles to suddenly remember urgent appointments when they got too near the site."
                		},


                		{
                			'name' 	:  'The Leaky Cauldron',
                			'type'	:  'place',
                			'associatedPlace' :  '',
                			'icon'  :  '../../images/place.png',
                			'url'	:  '../../images/cauldron.jpg',
                			'lat'   :  '51.500687',
                			'lon'   :  '-0.126452',
                			'abt'	:  "The Leaky Cauldron was a popular wizarding pub and inn located in London. It was the entrance to Diagon Alley and indirectly Knockturn Alley. The rear of the pub opened up onto a chilly courtyard that contains the entrance to both alley ways.The pub was built by Daisy Dodderidge, the first landlady, in the early 1500s 'to serve as a gateway between the non-wizarding world and Diagon Alley.' It had a bar, several private parlour rooms, and a large dining room.To Muggles, the pub appears to be a broken-down old shop front on Charing Cross Road. This, however, was not the case prior to the imposition of the Statute of Secrecy and, in fact, prior to this, Muggle visitors were neither turned away, nor made to feel unwelcome."
                		},



                		{
                			'name'  :  'Harry Potter',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',  
                			'icon'  :  '../../images/place.png',
                			'url'   :  '../../images/5-2-harry-potter-png-file.png',
                			'lat'   :  '56.598437',
                			'lon'   :  '-4.218150',
                			'abt'   :  'Harry Potter is the Boy Who Lived, the Chosen One, the hero of the Wizarding world. He grew up with Muggles, and then came to Hogwarts where he faced dangers and terrors beyond his years. He, along with his friends Hermione Granger, Ron Weasley and Neville Longbottom, destroyed Voldemort’s Horcruxes. Harry faced Voldemort at the end of a climactic battle in Hogwarts castle and defeated him.'
                		},

                		{
                			'name'  :  'Ron Weasley',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/ron%20no%20background.png',
                			'lat'   :  '56.598137',
                			'lon'   :  '-4.218450',
                			'abt'   :  'Ron Weasley is Harry Potter’s best friend and the youngest son of Molly and Arthur Weasley. The story of Ron’s life is one of being overshadowed by his family and friends, yet it is Ron’s heart and humor that have solidified his friendships and given those around him the support they needed to carry through. Tall and gangly with bright red hair and freckles , Ron has a way of keeping things lighthearted that makes him well-liked, despite occasional bouts of stress .'
                		},

                		{
                			'name'  :  'Hermione Granger',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/84954d469c213cb8bf854939c7aaa9e3.png',
                			'lat'   :  '56.598237',
                			'lon'   :  '-4.218750',
                			'abt'   :  'Resourceful, principled and brilliant, Hermione Jean Granger is easily the brightest witch of her generation. She, along with Ron Weasley, is one of Harry Potter’s closest friends. She is also Muggle-born (her parents were dentists), and so is a living, breathing example of the fallacy of pureblood wizard supremacy.'
                		},

                		{
                			'name'  :  'Draco Malfoy',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/draco_malfoy_by_captainjackharkness-d4bjnmr.png',
                			'lat'   :  '56.598337',
                			'lon'   :  '-4.218950',
                			'abt'   :  'Draco Malfoy is the son and only child of Lucius and Narcissa Malfoy and was a student at Hogwarts in the same year as Harry Potter. He is a rival of Harry, actively trying to undermine him in any way he can. Draco has white-blond hair and a pale, pointed face. He owns an eagle owl which made almost daily deliveries of sweets from home. Draco became the Slytherin Quidditch Seeker after his father made a generous donation of Nimbus 2001 brooms to the team .'
                		},

                		{
                			'name'  :  'Fred Weasley',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/fred_weasley_by_captainjackharkness-d4lo3dg.png',
                			'lat'   :  '56.598037',
                			'lon'   :  '-4.219750',
                			'abt'   :  "Fred Weasley (1 April, 1978 – 2 May, 1998) was a pure-blood wizard, a son of Arthur Weasley and Molly Weasley (née Prewett), brother to Bill, Charlie, Percy, Ron, and Ginny Weasley, and twin brother to George Weasley. Fred's first few years were marked by the height of the First Wizarding War and when Lord Voldemort fell for the first time. He attended Hogwarts School of Witchcraft and Wizardry from 1989-1996 and was sorted into Gryffindor House. Both he and his twin brother were popular students, known for their sense of humour, pranks, and were also Beaters for the Gryffindor Quidditch team. In their seventh year, they joined Dumbledore's Army, an organisation taught and led by Harry Potter."
                		},

                		{
                			'name'  :  'George Weasley',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/george_weasley_render_by_jouzumakiweasley-d4ks6fy.png',
                			'lat'   :  '56.598537',
                			'lon'   :  '-4.219750',
                			'abt'   :  "George Weasley (b. 1 April, 1978) was a pure-blood wizard, son of Arthur Weasley and Molly Weasley (née Prewett), brother of Bill, Charlie, Percy, Ron, and Ginny, and twin brother of the late Fred Weasley. George's first few years were marked by the height of the First Wizarding War and Lord Voldemort's first fall. He attended Hogwarts School of Witchcraft and Wizardry from 1989-1996 with Fred, and was Sorted into Gryffindor House. He and Fred were popular students, becoming Beaters for the Gryffindor Quidditch team in their second year, and members of Dumbledore's Army in their unfinished seventh year."
                		},

                		{
                			'name'  :  'Neville Longbottom',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/tumblr_on1kpaPiJU1rxkqbso1_500.png',
                			'lat'   :  '56.598637',
                			'lon'   :  '-4.219250',
                			'abt'   :  'Neville is the son of Frank and Alice Longbottom, famous and well-liked Aurors who were tortured into madness by the Death Eater Bellatrix Lestrange. The Longbottoms are one of the few pureblood families in the Wizarding world. Neville is a staunch friend of Harry Potter’s, and a true Gryffindor.'
                		},

                		{
                			'name'  :  'Luna Lovegood',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/tumblr_nvpvcdLMbk1rxkqbso1_500.png',
                			'lat'   :  '56.598737',
                			'lon'   :  '-4.219550',
                			'abt'   :  'Luna Lovegood is a witch in Ginny’s year, a brave member of Dumbledore’s Army, who is considered a bit weird by her classmates. She comes by this reputation honestly: Luna simply isn’t like the other kids at all.he dresses unusually, she proclaims her strange beliefs openly, and in some ways she seems to be completely out of touch with what’s going on around her. She has a somewhat bizarre sense of appropriate social behavior. '
                		},

                		{
                			'name'  :  'Ginny Weasley',
                			'type'	:  'character',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/character.png',
                			'url'   :  '../../images/ginny.png',
                			'lat'   :  '56.598837',
                			'lon'   :  '-4.219750',
                			'abt'   :  'Ginny is the youngest child and only daughter of Arthur and Molly Weasley , and the first girl born to the family in several generations . Though consistently underestimated by her family, she is a powerful witch  and also quite popular . She has bright brown eyes  and vivid, flaming red hair, worn as a long mane , very apt for a lion-hearted Gryffindor). When her jaw is set, her facial resemblance to Fred and George is striking .'
                		},

                		{
                			'name'  :  'The Boy who Lived',
                			'type'	:  'event',
                			'associatedPlace' :  'Privet Drive',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_1.m4v',
                			'duration' : '37',
                			'lat'   :  '51.228765',
                			'lon'   :  '0.176711',
                			'abt'   :  'Albus Dumbledore, a wizard and the head of the Hogwarts wizardry academy, appears on their street. He shuts off all the streetlights and approaches a cat that is soon revealed to be a woman named Professor McGonagall (who also teaches at Hogwarts) in disguise. They discuss the disappearance of You-Know-Who, otherwise known as Voldemort. Dumbledore tells McGonagall that Voldemort killed the Potter parents the previous night and tried to kill their son, Harry, as well, but was unable to. Dumbledore adds that Voldemort’s power apparently began to wane after his failed attempt to kill Harry and that he retreated. Dumbledore adds that the baby Harry can be left on the Dursleys’ doorstep. McGonagall protests that Harry cannot be brought up by the Dursleys. But Dumbledore insists that there is no one else to take care of the child. He says that when Harry is old enough, he will be told of his fate. A giant named Hagrid, who is carrying a bundle of blankets with the baby Harry inside, then falls out of the sky on a motorcycle. Dumbledore takes Harry and places him on the Dursley’s doorstep with an explanatory letter he has written to the Dursleys, and the three part ways.'
                		},

                		{
                			'name'  :  'The Vanishing Glass',
                			'type'	:  'event',
                			'associatedPlace' :  'The Zoo',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_2.m4v',
                			'duration' : '51',
                			'lat'   :  '51.225865',
                			'lon'   :  '0.176811',
                			'abt'   :  'Ten years have passed. Harry is now almost eleven and living in wretchedness in a cupboard under the stairs in the Dursley house. He is tormented by the Dursleys’ son, Dudley, a spoiled and whiny boy. Harry is awakened one morning by his aunt, Petunia, telling him to tend to the bacon immediately, because it is Dudley’s birthday and everything must be perfect. Dudley gets upset because he has only thirty-seven presents, one fewer than the previous year. When a neighbor calls to say she will not be able to watch Harry for the day, Dudley begins to cry, as he is upset that Harry will have to be brought along on Dudley’s birthday trip to the zoo. At the zoo, the Dursleys spoil Dudley and his friend Piers, neglecting Harry as usual. In the reptile house, Harry pays close attention to a boa constrictor and is astonished when he is able to have a conversation with it. Noticing what Harry is doing, Piers calls over Mr. Dursley and Dudley, who pushes Harry aside to get a better look at the snake. At this moment, the glass front of the snake’s tank vanishes and the boa constrictor slithers out onto the floor. Dudley and Piers claim that the snake attacked them. The Dursleys are in shock. At home, Harry is punished for the snake incident, being sent to his cupboard without any food, though he feels he had nothing to do with what happened.'
                		},

                		{
                			'name'  :  'The Letters from No One',
                			'type'	:  'event',
                			'associatedPlace' :  'Privet Drive',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_3.m4v',
                			'duration' : '71',
                			'lat'   :  '51.228565',
                			'lon'   :  '0.176711',
                			'abt'   :  'Punished for the boa constrictor incident, Harry is locked in his cupboard until summer. When finally free, he spends most of the time outside his house to escape the torments of Dudley’s cohorts. Harry is excited by the prospect of starting a new school in the fall, far away from Dudley for the first time in his life. One day, Uncle Vernon tells Harry to fetch the mail. Harry notices a letter bearing a coat of arms that is addressed to him in “The Cupboard under the Stairs.” Uncle Vernon grabs the envelope from him and shows it to his wife. Both are shocked. They force Dudley and Harry to leave the kitchen in order to discuss what to do. The next day, Uncle Vernon visits Harry in the cupboard. He refuses to discuss the letter, but he tells Harry to move into Dudley’s second room, previously used to store Dudley’s toys.The next day, another letter comes for Harry, this time addressed to him in “The Smallest Bedroom.” Uncle Vernon becomes alarmed. Harry tries to get the letter, but Uncle Vernon keeps it from him. The following morning, Harry wakes up early to try to get the mail before anyone gets up, but he is thwarted by Uncle Vernon, who has slept near the mail slot waiting for the letters. Though Uncle Vernon nails the mail slot shut, twelve letters come for Harry the next day, slipped under the door or through the cracks. Soon letters flood the house, entering in impossible ways. Uncle Vernon continues to prevent Harry from reading any of them. Enraged, Uncle Vernon decides to take everyone away from the house, but at the hotel where they stay, a hundred letters are delivered for Harry. Uncle Vernon decides on even greater isolation. On a dark, stormy night, he takes the family out to an island with only one shack on it. Inside, Vernon bolts the door. At midnight, as it becomes Harry’s birthday, there is a loud thump at the door.'
                		},

                		{
                			'name'  :  'The Keeper of Keys',
                			'type'	:  'event',
                			'associatedPlace' :  'The Far away Lake',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_4.m4v',
                			'duration' : '51',
                			'lat'   :  '52.858129',
                			'lon'   :  '0.318604',
                			'abt'   :  'The thump is heard again. A giant smashes down the door. Uncle Vernon threatens the giant with a gun, but the giant takes the gun and ties it into a knot. The giant presents Harry with a chocolate birthday cake and introduces himself as Hagrid, the “Keeper of Keys and Grounds at Hogwarts.” Hagrid is disturbed to find out that the Dursleys have never told Harry what Hogwarts is. Vernon tries to stop Hagrid from telling Harry about Hogwarts, but to no avail. Hagrid tells Harry that Harry is a wizard and presents him with a letter of acceptance to the Hogwarts School of Witchcraft and Wizardry. Vernon protests that he will not allow Harry to attend Hogwarts. Hagrid explains to Harry that the Dursleys have been lying all along about how the boy’s parents died. Harry learns that they did not die in a car crash, as he had always thought, but were killed by the evil wizard Voldemort. Harry does not believe he could be a wizard, but then he realizes that the incident with the boa constrictor was an act of wizardry. With Uncle Vernon protesting, Hagrid takes Harry from the shack.'
                		},

                		{
                			'name'  :  'Harry in Diagon Alley',
                			'type'	:  'event',
                			'associatedPlace' :  'Diagon Alley',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_5.m4v',
                			'duration' : '28',
                			'lat'   :  '51.511992',
                			'lon'   :  '-0.128388',
                			'abt'   :  'Harry wakes up in the company of Hagrid and realizes that the preceding night was not a dream. The two set off to London to shop for Harry’s school supplies. Harry is concerned about the money required, but Hagrid assures him that his parents left behind plenty of funds for him at Gringotts, the wizards’ bank run by goblins. Their first stop in London is at the Leaky Cauldron, a pub where all the patrons recognize Harry and are both nervous and honored to have the opportunity to meet him. They head out to the street, where Hagrid taps on a brick wall, and a small street called Diagon Alley opens before them. Hagrid explains that Harry will buy what he needs for school here. They go to Gringotts, where they are escorted down to Harry’s safe. Inside, they view the piles of silver and gold that Harry’s parents left him. Hagrid explains the complex wizard monetary system, which is composed of Galleons, Sickles, and Knuts. Hagrid fills a small bag with money. He then takes Harry to another vault, number 713, which is empty except for a grubby little package that Hagrid picks up and hides in his clothes, warning Harry not to ask about it.Hagrid then takes Harry to be fitted for his uniform. In the store, he encounters a snobbish and unlikable boy who will also be starting Hogwarts in the fall. The snobbish boy talks highly about grand old wizard families, and Harry begins to worry about whether he is cut out to be a wizard. But Hagrid reassures Harry, telling him that he will learn all he needs to know and that there are many Muggle students at Hogwarts. After buying the required books and ingredients for potions, Hagrid and Harry then head to the wand store. Mr. Ollivander, the storeowner, makes Harry try a number of magic wands, telling him that it will be clear when he has the right one. Harry tries out many wands. Finally, he picks up one made of holly and phoenix feather, and sparks shoot out from it—this is clearly the right wand. Ollivander tells Harry that the only other wand containing feathers from the same phoenix belonged to Voldemort and had been used to give Harry his lightning-bolt forehead scar.'
                		},

                		{
                			'name'  :  'Harry Meets Ron and Hermione',
                			'type'	:  'event',
                			'associatedPlace' :  'PlatForm Nine and Three Quarters',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_6.m4v',
                			'duration' : '45',
                			'lat'   :  '52.303947',
                			'lon'   :  '-0.676628',
                			'abt'   :  'Harry’s last month with the Dursleys is unpleasant. The day before he is due to leave, Harry asks Uncle Vernon to take him to the train station. Uncle Vernon agrees to take him but ridicules him for saying he is to leave from track nine and three quarters, as is marked on the ticket Hagrid gave him. The following day, Harry arrives at the station and stands between tracks nine and ten, wondering with increasing alarm how to find track nine and three quarters. Finally, he overhears some people mention Hogwarts; it is a family of red-haired children who seem to be bound for the academy. He asks the mother for help, and she tells him to walk through the barrier between tracks nine and ten. Harry does so, and he is astonished to find the train to Hogwarts on the other side. Harry boards it.On the train, Harry is introduced to Fred and George Weasley, twins who are returning to school, and to their brother Ron, another student who will be starting at Hogwarts. Ron introduces Harry to such details of wizard life as Quidditch (a game a bit like soccer, but played on broomsticks), Famous Witches and Wizards cards (collectible items like baseball cards), and Every Flavor Beans. One of the cards bears the picture of Albus Dumbledore. Ron, who comes from a poor family, cannot afford the pastries sold on the train, so Harry buys a lot with his newfound wealth and shares them with Ron. Harry also meets a somewhat annoying, overachieving girl named Hermione Granger and sees again the unpleasant boy from the uniform shop, whose name is Draco Malfoy. All the students have heard of Harry, and Harry is not sure how to respond to his fame. Arriving at the station, the newcomers are led onto boats in which they sail to the castle of Hogwarts.'
                		},

                		{
                			'name'  :  'The Sorting Hat',
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_7.m4v',
                			'duration' : '25',
                			'lat'   :  '56.598137',
                			'lon'   :  '-4.218650',
                			'abt'   :  'The new students are greeted at the castle door by Professor McGonagall, who tells them they will soon be sorted into their houses. All Hogwarts students live in one of four residences: Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Each house has its own team for Quidditch, a game that resembles soccer on broomsticks. The houses are in a yearlong competition with one another to acquire the most points, which are earned by success in Quidditch games and lost for student infractions. As the students enter Hogwarts, ghosts appear in the hallway. The students are led to the Great Hall, where the entire school waits for them. They see a pointy hat on a stool. When the students try on the hat, it announces the house in which they are placed. Harry becomes very nervous. He has learned that he does not care for Slytherin house, as the students in it are unpleasant and Voldemort once belonged to Slytherin. Finally, it is Harry’s turn to wear the hat. After a brief mental discussion with the hat in which it tries to suggest Slytherin to him, the hat places Harry in Gryffindor. Harry is pleased to find that he is joined in Gryffindor by Ron and Hermione. Draco Malfoy is placed in Slytherin.'
                		},

                		{
                			'name'  :  'The Troll',
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_8.m4v',
                			'duration' : '65',
                			'lat'   :  '56.598337',
                			'lon'   :  '-4.218650',
                			'abt'   :  "Harry and Ron ran toward the bathroom and spotted Severus Snape, following Quirrell to the third floor corridor. They, unknowingly, locked the troll in with Hermione. Realising their mistake, they ran in and Ron screamed at it and threw something at it. Harry, meanwhile, jumped on the troll and shoved his wand up its nose. The troll grabbed and Ron hovered the troll's club over its head and knocked it out. This was the start of Harry and Ron's friendship with Hermione. It is unknown what happened to the troll."
                		},

                		{
                			'name'  :  'Gryffindor wins Quidditch',
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts Quidditch Ground',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_9.m4v',
                			'duration' : '48',
                			'lat'   :  '56.590737',
                			'lon'   :  '-4.211750',
                			'abt'   :  "The next morning, the Quidditch match begins. Harry plays the position of Seeker, which means he must capture a little object called the Golden Snitch. He spots it and is flying toward it when the Slytherin Seeker pushes him out of the way and is penalized. Later in the game, Harry’s broom begins moving uncontrollably. Hagrid comments that only dark magic could make a broomstick so hard to manage. Hermione notices that Snape is staring at Harry and muttering to himself. As the Weasley twins try to rescue their teammate Harry, Hermione rushes over to Snape, sneaks behind him, and sets his robe on fire. Suddenly, the spell on Harry’s broom is broken and Harry is once again in control. He starts speeding toward the ground and lands, catching the Snitch.Hagrid takes Harry back to his hut with Hermione and Ron, who tells Harry that Snape was putting a curse on his broomstick. Hagrid does not believe this charge, asking why Snape would try to kill Harry. Harry tells Hagrid about Snape getting injured by the dog in the third-floor corridor. Hagrid involuntarily reveals that the three-headed dog, Fluffy, is his, and that what the dog is guarding is a secret known only to Albus Dumbledore and a man named Nicolas Flamel."
                		},


                		{
                			'name'  :  'Harry goes to the Forbidden Forest',
                			'type'	:  'event',
                			'associatedPlace' :  'The Forbidden Forest',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_10.m4v',
                			'duration' : '87',
                			'lat'   :  '56.598837',
                			'lon'   :  '-4.219750',
                			'abt'   :  "Filch takes Harry, Hermione, and Ron to Professor McGonagall’s office to be punished. She accuses them of concocting the whole dragon story to lure Malfoy out of bed and get him into trouble. As punishment, McGonagall deducts fifty points from Gryffindor for each of the three wrongdoers. Harry is horrified that his house will lose 150 points. When the bad news is circulated the next morning, Harry quickly falls from his pedestal as Quidditch star. He considers resigning from the Quidditch team, but Wood convinces him that doing so would be useless.Harry resolves not to get involved in any more suspicious activities, but a week later he overhears a conversation in which Quirrell appears to give in to someone, presumably Snape, as if Snape is pressing him to do something. Harry and his friends try to figure out what to do, but they cannot come up with a plan of action. Harry, Hermione, and Neville are told to report to Hagrid that night for their detention. When they show up, they are surprised to find that detention will be held in the surrounding Forbidden Forest. Malfoy, who has also been given detention, objects to being forced outside like a servant.Hagrid points to some traces of unicorn blood on the ground and explains that they will be going into the forest to find out what has been harming the animals. They split up into two groups: Harry and Hermione with Hagrid, Neville and Malfoy with Hagrid’s dog, Fang. They penetrate deep into the forest. Harry sees signs that the other group is in trouble, but Hagrid discovers that Malfoy has merely been playing tricks on Neville. Hagrid sends Harry off with Malfoy, taking Neville along with himself. Harry and Malfoy come across a mysterious cloaked figure drinking the blood of a recently killed unicorn. Malfoy and Fang run away, leaving Harry alone. A centaur named Firenze rescues Harry and carries him back to Hagrid. On his way back, Harry learns that the cloaked figure was Voldemort and that he was drinking unicorn blood to sustain himself until he could obtain the Sorcerer’s Stone."
                		},


                		{
                			'name'  :  'The Faceoff',
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_11.m4v',
                			'duration' : '97',
                			'lat'   :  '56.598737',
                			'lon'   :  '-4.218950',
                			'abt'   :  "Harry lies, telling Quirrell that he sees himself in the mirror winning the house cup for Gryffindor. Voldemort tells Quirrell that Harry is lying. Wishing to speak directly to Harry now, Voldemort tells Quirrell to unwrap his turban. Harry is shocked to find Voldemort’s face on the back of Quirrell’s head—Voldemort is a shape-shifter and has been using Quirrell’s body. Voldemort tries to persuade Harry to give him the stone, which he knows is in Harry’s pocket. He tells Harry to join him rather than resist and be killed like his parents. Harry refuses and Voldemort orders Quirrell to seize Harry. Quirrell tries, but each time he grabs for Harry, his hand blisters as if burned. Harry grabs Quirrell, putting him in tremendous pain; meanwhile, the pain in Harry’s forehead scar is steadily increasing. As the struggle intensifies, Harry feels himself losing hold of Quirrell and falling.When Harry regains consciousness, Dumbledore is standing over him. Harry starts telling Dumbledore that Quirrell has the stone, but Dumbledore tells him to relax. Harry realizes that he is in the hospital. He asks Dumbledore again about the stone and Dumbledore tells him that he arrived just in time to save Harry from Quirrell. Dumbledore adds that he spoke with Nicolas Flamel and they decided to destroy the stone. He explains also that Quirrell could not touch Harry because Harry was protected by his mother’s love. Dumbledore also reveals that it was he who left the invisibility cloak for Harry and explains that there was enmity between Snape and Harry’s father, much like the enmity between Malfoy and Harry. Furthermore, Dumbledore explains how Harry ended up with the stone; Harry was the only one who wanted to find the stone for itself rather than for what the stone could obtain."
                		},

                		{
                			'name'  :  'Leaving Hogwarts',
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/stone.png',
                			'url'   :  '../../videos/1_12.m4v',
                			'duration' : '37',
                			'lat'   :  '56.598937',
                			'lon'   :  '-4.218950',
                			'abt'   :  "When school grades finally arrive, Harry and Ron do well, and Hermione is at the top of the class. They all pack and head to the train station to go back to their homes. Harry, Hermione, and Ron say their good-byes for the summer and Harry heads home, eager to use a little magic on Dudley Dursley.They bid good-byes and return home."
                		},

                		{
                			'name'  :  "Dobby's Warning",
                			'type'	:  'event',
                			'associatedPlace' :  'Privet Drive',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_1.m4v',
                			'duration' : '16',
                			'lat'   :  '51.228965',
                			'lon'   :  '0.176911',
                			'abt'   :  "The creature sitting on Harry's bed is small, has bulging green eyes and bat-like ears, and is wearing a tattered pillowcase for clothes. Harry, still shocked by its appearance, recognizes it as the thing that was staring at him from the bush earlier that afternoon. The creature stands and introduces himself as Dobby the house-elf, and Harry invites him to sit back down on the bed. Dobby bursts into noisy tears at being treated like an equal by a wizard, and this noise causes the dinner party voices downstairs to falter slightly. When Harry comments that Dobby must not know many nice wizards, the house-elf begins to bang his head on the window, explaining his behavior as a self-inflicted punishment for speaking disloyally of his masters, saying that he was bound to serve them until he died.Dobby praises Harry for being famous, polite, good-hearted, and modest. Harry denies the praise until Dobby makes reference to Voldemort. We learn that Dobby wants to prevent Harry from returning to Hogwarts, as danger awaits him there. Harry protests, but Dobby will only respond by nodding or shaking his head. Their dialogue is interrupted by Dobby stopping to bang his head once more. This time, his yelps of pain are heard downstairs. Vernon Dursley reprimands Harry, and Harry quickly hides Dobby in the closet. Vernon leaves, and the conversation continues. Harry is furious to find that Dobby has been collecting all of his mail from Ron and Hermione. Dobby explains his actions as an effort to deter Harry from returning to school. Harry replies that he must return to Hogwarts, and Dobby leaps off the bed and enchants a violet pudding, causing the dessert for the dinner party to levitate. Dobby then causes it to crash to the ground in a failed attempt to persuade Harry to stay put."
                		},

                		{
                			'name'  :  "The Escape to the Burrow",
                			'type'	:  'event',
                			'associatedPlace' :  'The Burrow',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_2.m4v',
                			'duration' : '79',
                			'lat'   :  '50.703399',
                			'lon'   :  '-3.328857',
                			'abt'   :  "Harry, awakened from a dream in which someone is tapping at his cage, peers out his barred window to see his best friend, Ron Weasley, inside a car suspended in midair driven/flown by his twin older brothers, Fred and George. Ron explains that he was worried when Harry failed to answer his letters and so came to rescue him from the Dursleys. The four boys work together to yank the bars off Harry's window. Fred and George, two avid pranksters, pick the lock on Harry's door and tiptoe downstairs to collect Harry's trunk. They manage to escape out the window, but without Hedwig, who screeches loudly, waking Uncle Vernon, who runs upstairs in a fury. A game of tug-a-war ensues. The Weasleys pull on Harry's arms and Vernon pulls on his legs. The Weasleys win, and the boys all drive off through the night sky.In the car, Harry recounts his experience with Dobby, and Fred and George inform him that house-elves usually belong to old, wealthy wizard families. This information leads Harry to believe that Dobby must live with Draco Malfoy, Harry's least favorite person at Hogwarts. Harry believes that Draco must have sent his house-elf to prevent Harry from coming back to school. Harry mentions the incident to the twins, who inform him that Lucius Malfoy, Draco's father, was a loyal follower of Voldemort, an evil wizard. The boys discuss Mr. Weasley, who works in the Ministry of Magic in the Misuse of Muggle Artifacts Department, reversing the damage caused when bewitched objects do strange and dangerous things. The Weasley twins explain that their father loves anything having to do with Muggles, and bought this car so that he could tinker with and put spells on it."
                		},


                		{
                			'name'  :  "The Whomping Willow",
                			'type'	:  'event',
                			'associatedPlace' :  'Platform Nine and Three Quarters',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_3.m4v',
                			'duration' : '81',
                			'lat'   :  '52.303347',
                			'lon'   :  '-0.676628',
                			'abt'   :  " Mr. Weasley has enchanted his Ford Anglia so that it will fit all of them plus their luggage and pets comfortably, and after several returns for forgotten items, they finally arrive at King's Cross in time to catch the Hogwarts Express train at platform nine-and-three-quarters. The Hogwarts students arrive at the platform by walking through the wall between platforms nine and ten, and all of the Weasleys successfully do so. When it is time for Harry and Ron to go through the wall, the wall closes up and refuses to let them through. They miss the train, and in a flash of inspiration, they decide to follow the train in Mr. Weasley's flying Ford Anglia.The ride to Hogwarts is relaxing. The boys skim the clouds, keeping sight of the red Hogwarts train below. Several hours later, night falls and the boys are bored and hungry and wondering how much longer the trip could possibly be. The Anglia runs out of gas and begins to fall toward the Hogwarts lake. Ron and Harry do their best to control it, but still the car engine dies and the car plunges straight into a strange sprawling tree in the Forbidden Forest. The tree is the Whomping Willow, the only tree in the forest that will strike back when struck. Its thick, angry branches wallop the car, Harry, and Ron. The boys manage to collect their things. They flee toward the Hogwarts castle just in time to spy through the windows the great feast and the 'Sorting' process, in which first-year students try on the 'sorting hat' are selected (through the judgment of the hat) for the four different houses, Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. While the boys observe the professors' table, they wonder at the absence of Professor Severus Snape, the mean and slimy Potions professor, and as they speculate, Snape appears behind them and directs them into his office."
                		},

                		{
                			'name'  :  "The Writing on the Wall",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_4.m4v',
                			'duration' : '69',
                			'lat'   :  '56.598107',
                			'lon'   :  '-4.218100',
                			'abt'   :  "In the passageway Harry hears an eerie murderous voice saying that it is time to kill. He tears off in the direction from which it comes, his friends close at his heels, and they arrive in a deserted corridor and see scrawled on a wall, 'The chamber of Secrets has been opened. Enemies of the Heir, Beware.'' Then from the ceiling they see a stiff, hanging cat-Mrs. Norris. Suddenly the halls rumble and fill with people coming out of the feast, and Draco Malfoy calls out, grinning and delighted, You'll be next, Mudbloods!Filch spies Mrs. Norris hanging from the ceiling, and explodes at Harry, accusing him of killing the cat. Dumbledore appears at this time and whisks Harry, Ron, Hermione, Filch and Mrs. Norris away, into Lockhart's nearby office, which Lockhart eagerly volunteered. They sit tensely among all of Lockhart's preening portraits of himself. Dumbledore examines the cat, Professor McGonagall frets quietly, and Snape sneers. Lockhart reassures them all in his curse-reversing expertise and Filch sobs. Dumbledore explains that the cat is not dead, but petrified, and that second- year students could not have possibly mastered the magic necessary for that degree of a dark spell. Dumbledore also says that soon the school will have enough grown Mandrakes to make a restorative potion, which Lockhart eagerly volunteers to make. Filch is unconvinced and explains that Harry knows he is a Squib and therefore attacked his cat, and Snape interrupts and says that the three students were in a peculiar place on the night of the Halloween feast. Ron, Harry, and Hermione explain the Deathday party, and Snape asks why they didn't come straight to the feast afterwards. Not wanting to explain about the eerie, disembodied voice, Harry explains that they were tired and wanted to go to bed. Snape does not believe them and recommends that Harry be taken off the Quidditch team until he is ready to tell the truth. McGonagall and Dumbledore quickly say that this will not be necessary. The three students walk up to their dorms, Ron explains what a Squib is, and Harry ponders what the Chamber of Secrets could possibly be."
                		},


                		{
                			'name'  :  "The Polyjuice Potion",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_5.m4v',
                			'duration' : '98',
                			'lat'   :  '56.598107',
                			'lon'   :  '-4.218400',
                			'abt'   :  "Hermione instructs Harry and Ron to leave two sleeping-potion-filled cakes in easy places for Malfoy's large, hulking friends Crabbe and Goyle to find, and then to hide them in a closet and pluck out a few of their hairs to add to the potion. Ron and Harry do this, and within minutes the cakes have been eaten, the sleeping bodies hidden, the hairs plucked. Soon they are back in the bathroom with Hermione. Hermione already has her hair, it turns out, because the day she was paired to duel with Millicent, one of the hairs of the large Slytherin girl wound up on Hermione's robes. The three friends add their hairs to their respective potions and drink them, and soon Harry is a replica of Goyle, Ron of Crabbe. Hermione refuses to come out of her stall, so Harry and Ron set off alone.Unfortunately, they don't know where the Slytherin common room is, so they wander around, accidentally asking a Ravenclaw girl, and suddenly they run into Percy, who is emerging from a side room. They regard him warily and he regards them back, just as warily, and finally Ron and Harry are saved by the approach of Malfoy. Malfoy leads them through corridors, to a black stone wall whose password is 'pure blood', which opens into the Slytherin common room. Malfoy is pleased with himself for obtaining a copy of the Daily Prophet, a wizard newspaper, and he shows Ron and Harry an article about Ron's father being fined for bewitching a Muggle car. Ron is furious, but tries to conceal it. Malfoy then speaks of the last attack by the Heir, and how a girl was killed, and then how he hopes that this time Hermione will be killed. Then he says wistfully that he wished he knew who the heir was, so that he could help him, and finally he reveals information about a hidden chamber under his family's drawing room floor, in which dark wizarding paraphernalia is kept. Ron and Harry are a blank audience to all of this, but Malfoy doesn't seem to notice that they are any slower than the real Crabbe and Goyle. After some time the spell begins to end, and Ron and Harry dash out of the room and back to Hermione, who is still in the stall. Moaning Myrtle is in delighted humor, and the reason turns out to be because the hair in the potion turned Hermione into a cat. Ron and Harry persuade her to go to the hospital wing, while Myrtle gloats in her toilet."
                		},

                		{
                			'name'  :  "The Very Secret Diary",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_6.m4v',
                			'duration' : '105',
                			'lat'   :  '56.598257',
                			'lon'   :  '-4.218400',
                			'abt'   :  " Once Harry has gathered his things and left the laughing crowds, he notices that all of his belongings are covered in his spilt red ink, all except Riddle's diary. This puzzles Harry, and he retires to bed early that evening and pages through the diary. He writes his name on a page and watches it disappear, and suddenly the ink rises up again, forming the words, 'Hello, Harry Potter. My name is Tom Riddle. How did you come by my diary?'' This begins a dialogue between the two boys with oddly similar appearances and pasts, separated by fifty years and connected through this secret diary. Riddle writes that he was in fact awarded his medal for catching the person who had opened the Chamber, and he invites Harry to visit his memory.Harry agrees, and within seconds he is blown into the pages of the diary to the headmaster's room. Here he witnesses a conversation between Riddle and the then- headmaster in which Riddle's request to remain at Hogwarts for the summer holidays is turned down because of the recent dangers of the open Chamber of Secrets. Harry then follows Riddle through the corridors, once running into a younger, auburn-haired Dumbledore who warns Riddle to head back to his dormitory. Riddle and Harry wait in the dungeons for a long time, and finally they hear and follow nearby footsteps. The footsteps belong to a younger Hagrid, who is trying to conceal something inside a box. Riddle explains that he must turn Hagrid in for possessing the guilty monster, and Hagrid argues vehemently that the animal inside the box is innocent. Riddle pulls out his wand, casting open the box and releasing a giant, hairy spider that scuttles over him and out through the corridor. Harry is whirled back into real time, back into his dormitory, and he begins to tell Ron what he saw."
                		},


                		{
                			'name'  :  "Ginny Attacked",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_7.m4v',
                			'duration' : '53',
                			'lat'   :  '56.598257',
                			'lon'   :  '-4.218770',
                			'abt'   :  "The boys dash to the staff room to show their findings to McGonagall, only to hear an announcement that another attack has occurred and teachers must report to the staff room immediately. Hiding behind a row of robes, Harry and Ron listen to the staff meeting and learn that Ginny Weasley had been taken into the Chamber of Secrets, and that written on the wall were the words, 'Her skeleton will lie in the Chamber forever.'' McGonagall then announces that the school will be closed, the students sent home the following morning. At this point, Lockhart enters the meeting and all the teachers turn on him, challenging him to take on the monster by himself, since he is so boastful that he knows how. Lockhart titters nervously and leaves the room, and soon Harry and Ron walk to his office to help him by telling him what they know of the monster in the pipes, and they find him in his office packing his bags."
                		},


                		{
                			'name'  :  "The Basilisk",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_8.m4v',
                			'duration' : '120',
                			'lat'   :  '56.598337',
                			'lon'   :  '-4.218886',
                			'abt'   :  "Harry enters the snake statue-lined Chamber of Secrets and approaches an enormous stone figure of Salazar Slytherin, at whose feet lies the still, small figure of Ginny Weasley. Harry runs to her and examines her, and while he is doing this he notices the misty, shadowy figure of Tom Riddle standing nearby. Harry desperately asks Tom to help him rescue Ginny and escape the Chamber of Secrets, but Tom remains where he is, speaking in a lofty voice, unconcerned about the situation. At one point he captures Harry's wand, slightly alarming Harry, but more than anything else, rendering him more impatient to get himself and Ginny out of the way of the hidden basilisk. Harry finally asks Tom how Ginny got to be in her present state, and Tom smiles broadly and begins to speak.He tells how Ginny found his diary and poured all of her worries about Hogwarts and her crushes on Harry into it, and how Tom wrote back, comforting her. Through this dialogue, Tom grew stronger and ultimately poured a little of his soul into Ginny, manipulating her to kill Hagrid's roosters and open the Chamber of Secrets.Tom hisses for the basilisk to emerge from its chamber, and Harry closes his eyes and feels Fawkes leave his shoulder. He hears a great, weighty slithering noise and he begins to run, fearing for his life. From above him he hears a great spitting sound among all the hissing, and he squints open his eyes only to catch sight of Fawkes puncturing the basilisk's other eye. The blind snake sways madly about the chamber, and its tail sweeps the Sorting Hat into Harry's hands. Harry puts it on and wishes desperately for it to help him, and out of nowhere it produces a glittering sword, which Harry then slides into the mouth of the striking serpent, killing it, but getting injured by a fang in the process. Fawkes lands back on Harry's shoulder and begins to cry. Tom laughs, proclaiming that even the bird knows that Harry is dying, but then all of a sudden Harry's wound seals up, due to the healing properties of phoenix tears. Tom is angered by this and lifts his wand to exterminate Harry, but before he can cast a spell, Fawkes knocks the diary into Harry's hands, and Harry thrusts the basilisk tooth into the center of it, causing Tom to scream in agony and disappear."
                		},

                		{
                			'name'  :  "Everyone is Rescued and Dobby is free",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/chamber.png',
                			'url'   :  '../../videos/2_9.m4v',
                			'duration' : '155',
                			'lat'   :  '56.598337',
                			'lon'   :  '-4.218926',
                			'abt'   :  "The door bangs open and Lucius Malfoy appears, Dobby squealing at his heals. Lucius is most upset that Dumbledore has returned to Hogwarts, and Dumbledore calmly explains that the attacks have been stopped, and that eleven of the school governors contacted him, begging him to return to Hogwarts and suggesting that they had been blackmailed into suspending him. When Dumbledore holds up the diary as evidence from the recent events, Dobby begins to make strange faces and gestures, which Harry ultimately understands to mean that Lucius had slipped the diary into Ginny's books in Flourish and Blotts, so many months ago. Lucius acts shifty and defensive when Harry accuses him of this, and he sweeps out of the room, yelling at Dobby to follow. Harry thinks quickly and wraps the diary inside one of his slimy socks, then hands it to Lucius. Lucius unwraps it and disgustedly throws down the sock, which Dobby retrieves with a thrilled expression on his face. In handing him an article of clothing, Lucius has inadvertently freed his house-elf, and Dobby thanks Harry profusely in front of the livid Lucius, and then the elf disappears with a crack.Harry then attends the great feast. Hagrid returns, exams are cancelled, and Lockhart is officially removed from the school staff, and Gryffindor is given the House cup. Harry has not been this happy for a long time."
                		},


                		{
                			'name'  :  "The Knight Bus",
                			'type'	:  'event',
                			'associatedPlace' :  'The Leaky Cauldron',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_1.m4v',
                			'duration' : '102',
                			'lat'   :  '51.500987',
                			'lon'   :  '-0.120452',
                			'abt'   :  "Harry leaves the Dursleys and is not sure what to do next. He is certain that he will be expelled from Hogwarts for having practiced magic outside of school, and so he considers flying on his brookstick to London, where he could live as a wizard outcast. He feels himself being watched and he is alarmed to see a large outline of a dark creature staring at him. He falls into the gutter, and is suddenly rescued by the Knight Bus, a hitchhiking service for wizards in need. Harry boards the bus after some questioning from the nosey teenage conductor, Stan Shunpike, during which Harry gives a false name, Neville Longbottom, and flattens his hair over his famous scar. The bus flies through the city, managing not to hit anything, because obstacles jump out of its way. During the ride, Harry overhears a conversation between Stan and the driver, Ernie Prang, discussing the escape of Sirius Black, and Harry learns that Black was a follower of Voldemort. Black spent twelve years in Azkaban, the wizard prison, after murdering thirteen people with a single curse.When the Knight Bus arrives at Diagon Alley, a wizard community in London, Harry gathers his things and gets off the bus, only to be greeted by Cornelius Fudge, the Minister of Magic. Fudge reveals Harry's identity to the eavesdropping Stan and Ernie, and then he takes Harry inside for dinner, expressing great relief that Harry is unharmed. Harry thinks this concern is a bit peculiar, and he thinks it even more peculiar that Fudge has no intention of punishing him for having inflated his aunt, who, since her inflation, has been returned to her normal size. Harry does not think too much about this, however, and he falls asleep, exhausted, in the room at the Leaky Cauldron where Fudge arranged that he would stay until school begins."
                		},


                		{
                			'name'  :  "The Dementor",
                			'type'	:  'event',
                			'associatedPlace' :  'Platform Nine and Three Quarters',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_2.m4v',
                			'duration' : '100',
                			'lat'   :  '52.290847',
                			'lon'   :  '-0.676628',
                			'abt'   :  "All of a sudden, the train stops and all the lights go out. A tall, robed creature enters Harry's compartment, and Harry feels a painful, intense, miserable cold feeling and hears screams. He passes out. He wakes to explanations that the creature is a Dementor, one of the guards of Azkaban, and that Lupin sent it away by sending something silvery in its direction. Lupin gives chocolate to him and to the other shaken students, and soon afterwards they all arrive at Hogwarts."
                		},

                		{
                			'name'  :  "Quidditch in Rain",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts Quidditch Ground',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_3.m4v',
                			'duration' : '57',
                			'lat'   :  '56.590837',
                			'lon'   :  '-4.211750',
                			'abt'   :  "The weather takes a turn for the worse, and Gryffindor House approaches its first game against Hufflepuff, who has always been an unformidable opponent; still, Oliver Wood, the Gryffindor captain, warns his team to take Hufflepuff seriously. The day of the match, Harry enters his Defense Against the Dark Arts class to find Snape substituting, snarling at students, and scrapping Lupin's lesson plans in order to teach the class about werewolves.Harry and the Gryffindor team take the field, and through the rain and wind it is impossible to see anything. Harry and Cedric Diggory, the Hufflepuff seeker, circle around each other looking for the Snitch, but with no avail. All of a sudden, Harry catches sight of a large black dog silhouetted against the bleachers; the next moment he spies the Snitch, and finally, as he pursues it on his trusty Nimbus 2000 broomstick, he looks down to see hundreds of Dementors milling around alongside the field. Harry feels intensely cold, hears the scream of his mother as Voldemort murdered her, and falls out of the sky. He wakes in the hospital wing to find that Cedric caught the Snitch, the Hufflepuffs won the game. Harry's Nimbus had landed in the Whomping Willow, an angry thrashing tree in the Forbidden Forest, and had been ruined."
                		},


                		{
                			'name'  :  "The Patronus",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_4.m4v',
                			'duration' : '52',
                			'lat'   :  '56.590337',
                			'lon'   :  '-4.211160',
                			'abt'   :  " Harry begins meeting weekly with Lupin to practice the anti-Dementor spell, which is intended to conjure up a Patronus, a silvery protective charm. Lupin tells Harry to focus on his happiest thought before saying 'Expecto Patronum' and repelling the Dementor, or in this case, a Boggart that takes the shape of a Dementor around Harry. Harry tries this complicated spell several times with varying happy thoughts—flying on a broomstick, winning the House Championship, and leaving Privet Drive for Hogwarts. The last thought brings him some success, but he is still weak after the encounter. Each time the lesson ends, Lupin gives him chocolate and sends him on his way. Harry senses, however, that one reason he is unable to conjure a proper Patronus is that he secretly does not want to do away with hearing his parents' voices ever again."
                		},

                		{
                			'name'  :  "Cat, rat and Dog",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_5.m4v',
                			'duration' : '70',
                			'lat'   :  '56.590737',
                			'lon'   :  '-4.211160',
                			'abt'   :  "Harry and then Ron, ultimately dragging Ron away into the forest. Harry and Hermione dart after them and watch as the dog pulls Ron down inside the Whomping Willow, breaking his leg in the process. They follow him, but only after Crookshanks surprises them by pressing a hidden knot on the tree, causing it to quiet its branches. The path beneath the tree leads them into a boarded-up house that they instantly recognize as Hogsmeade's Shrieking Shack. In an upstairs room they find Ron, seated by Crookshanks, and guarded by Sirius Black, who the black dog has transformed into. Black disarms Harry and Hermione through the expelliarmus spell, and Harry, insane with fury at finally facing the man who caused his parents' death, leaps onto Black, reclaiming his wand with the help of Ron and Hermione, and ultimately forcing the unarmed Black into a corner, where he remains, at Harry's mercy. Crookshanks sits protectively on top of Black's chest.Before Harry can gather his courage to kill Black, Professor Lupin bursts through the door, disarming Harry. Lupin quietly asks, 'Where is he?' and Black points to Ron.Lupin begins saying that when he came to Hogwarts, a young werewolf, Dumbledore devised a way for him to leave Hogwarts secretly and safely through the Whomping Willow and remain, during the full moon, in the Shrieking Shack (thus explaining the name—the Shack was never haunted; just inhabited by a noisy werewolf). Lupin's good friends, James Potter, Sirius Black, and Peter Pettigrew, noticed his monthly absence and figured out his true identity. They then worked toward becoming animagi so they could assume animal form and keep Lupin company without placing themselves in danger. The four friends roamed everywhere and learned every part of Hogwarts and Hogsmeade, and they ultimately used this information to create the Marauder's Map.Hermione points out that there have been only seven registered animagi over the century, and Lupin admits ruefully that they were unregistered; he then expresses his guilt for never having told Dumbledore that Black was an animagus and could have entered the castle in another form, but explained that he felt deeply grateful to Dumbledore for giving him an education and a job, that he didn't want to let him down. Lupin then explains that Snape, who now makes the revolutionary potion Wolfsbane that allows Lupin to keep his mind, thus remaining harmless during his transformation, as a student was always curious about the monthly disappearance. Once evening, Black played a prank by encouraging Snape to follow Lupin down the Whomping Willow, and James Potter ran after him and rescued him before he encountered the fully-grown werewolf at the other end of the tunnel. This trick is one of the reasons for Snape's grudge against Lupin, Black, James Potter and his son Harry. As Lupin finishes explaining this, Snape suddenly appears in the corner of the room, shedding Harry's invisibility cloak. "
                		},


                		{
                			'name'  :  "Save Serious",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_6.m4v',
                			'duration' : '141',
                			'lat'   :  '56.594737',
                			'lon'   :  '-4.211960',
                			'abt'   :  "The second life to which Dumbledore refers, Harry determines, is Buckbeak's; so Harry and Hermione wait quietly by Hagrid's cabin, untying the hippogriff once the executioners have gone inside the cabin to deal with some paperwork. Harry, Hermione, and Buckbeak hide in the forest as they hear the thud of an axe swung in frustration at having lost the victim, as well as Hagrid's howl of joy at the surprise escape. They wait in the woods, watching themselves go down the Whomping Willow and back up, and while Hermione and Buckbeak hide in Hagrid's empty cabin from the werewolf, Harry slips out to see who conjured the patronus. He watches the Dementors approach and attempt to kiss him, and nothing happens- no patronus is conjured. At this moment, Harry realizes that it was he who had conjured it, not his father, as he had suspected, and so he conjures it again, saving his, Hermione's, and Black's life, and finally understanding that the form of his patronus is a stag, Prongs, his father's animagi form. Father and son regard each other, then the shape disappears. Harry rejoins Hermione, and together they fly on Buckbeak's back up to the tower room where Black is being held, and they send Black and Buckbeak flying away together to their freedom. "
                		},

                		{
                			'name'  :  "Lupin leaves and a gift for Harry",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/azkaban.png',
                			'url'   :  '../../videos/3_7.m4v',
                			'duration' : '63',
                			'lat'   :  '56.594337',
                			'lon'   :  '-4.211928',
                			'abt'   :  "Harry runs to visit him as he is leaving the castle, and he listens as Lupin explains in his usual good-natured manner that after the events of last night, he really shouldn't be allowed near students during his transformations. Dumbledore catches Harry leaving Lupin's office and talks with him for a bit, explaining that it is no coincidence that his patronus takes his father's animagus shape, and that Harry has done a wise thing by setting Pettigrew free. Harry is confused and a bit sad as he boards the train back to London.On the train, Hermione announces that she will drop down to a normal course load for the next semester, and Ron begins planning for Harry to stay with him for the summer. All of a sudden, a small, fluffy owl bumps against Harry's window, and he discovers in its beak a note from Sirius Black, saying that he is safe, that he did in fact send the Firebolt, and that Ron is to keep the owl as a replacement for his lost rat. In addition, Black has enclosed a note giving Harry permission to visit Hogsmeade the following year. Harry returns to the Dursleys anticipating a better summer than the last one."
                		},


                		{
                			'name'  :  "The Riddle House",
                			'type'	:  'event',
                			'associatedPlace' :  'Little Hangleton',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_1.m4v',
                			'duration' : '93',
                			'lat'   :  '54.625362',
                			'lon'   :  '-3.240967',
                			'abt'   :  "The Riddle House stands on a hilltop in Little Hangleton. Much mystery has arisen around it. Fifty years ago, its inhabitants, the Riddle family, were killed in a most mysterious manner, leaving no signs of bodily harm, seeming almost as if they had been frightened to death. The villagers instantly suspected Frank Bryce, the Riddles' stiff and misanthropic gardener, and even after he was questioned and found innocent, the villagers still mistrusted him, and the village boys often bothered him.One night, fifty years later, the elderly Frank is refilling his hot water bottle to ease the soreness of his joints, when he sees a bright light inside the Riddle House, and he immediately knows that the boys have set a fire. He limps over to the house, lets himself in with his spare key, walks up the dusty staircase, and stands in the hallway next to a room, where he overhears a conversation between two voices, one high pitched controlling one, another nervous submissive one. Frank overhears the controlling one, who reveals his name to be Lord Voldemort, telling the other one, whom he calls Wormtail, that he must wait for the Quidditch World Cup to end before capturing a boy named Harry Potter.Wormtail suggests using a different boy, but Lord Voldemort refuses. Wormtail pleads his loyalty by reminding his master that he brought him Bertha Jorkins, whose information proved quite useful before they had to kill her to prevent her from talking. Frank is horrified at this news, and is frightened when a thick, twelve-foot long snake slithers past him and into the room and begins hissing back and forth with Lord Voldemort. At this, Lord Voldemort calls Frank into the room and kills him in a single flash of green light; at that moment miles away, the boy named Harry Potter awoke in the night."
                		},


                		{
                			'name'  :  "The Portkey",
                			'type'	:  'event',
                			'associatedPlace' :  'The Quidditch Trillenium Stadium',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_2.m4v',
                			'duration' : '129',
                			'lat'   :  '50.571486',
                			'lon'   :  '-3.920688',
                			'abt'   :  "At the top of the hill, they encounter Cedric Diggory, a handsome Hogwarts student and the Seeker for the Hufflepuff Quidditch team, and his father, Amos Diggory. Amos Diggory spies Harry, and embarrasses everybody by talking about how Cedric beat the famous Harry Potter in last year's Quidditch game between Hogwarts Houses. The Diggorys have found the Portkey, a dilapidated boot, and at five a.m. they all touch it. It jerks them from the bellybutton and spins them all blindly through the air. When they arrive shakily at the campground, only Mr. Diggory, Mr. Weasley, and Cedric are able to land on their feet.The Weasleys go to their seats in the top box. As they sit down, Harry notices a small bat-eared creature sitting alone. Harry recognizes her instantly as a house-elf, and he finds out that her name is Winky. She is saving a seat for her master, and that she knows Dobby, whom Harry set free two years before. Winky explains that house-elves are supposed to do as they are told without payment, and that Dobby has been requesting payment. Soon Cornelius Fudge, the Minister of Magic, joins them in the top box, as do the Malfoys, the wealthy, arrogant family of Harry's nemesis at Hogwarts.Ludo Bagman is commentating on the game, and as he begins to speak, the teams send out their mascots. First, Bulgarian Veela, beautiful platinum-haired dancing Sirens enchant the audience males. Then, Irish Leprechauns form shapes in the sky and drop gold pieces onto the bleachers, which Ron collects and uses to repay Harry for the omnioculars. The players enter the field and the game begins. Harry has never seen such a fast game of Quidditch. The players dash madly through the sky, and Ireland is quickly in the lead. Harry uses a pair of Omnioculars that he just bought to watch the moves in slow motion, and to note the names of the various plays etched across the screen. The mascots are growing more involved, to the point that the Veela, angry at the Bulgarian's lagging behind, burst out of their beautiful skins and reveal their true, demonic bird- heads. Krum wows the audience by performing a 'Wronksi Feint,'' a spectacular dive for the Snitch that fools the other team's Seeker into following him and crashing into the ground. Once his team is one hundred and sixty points behind Ireland, he catches the Snitch, ending the game, but in Ireland's favor. The crowds go wild, and Fred and George go to collect their winnings from Ludo Bagman."
                		},


                		{
                			'name'  :  "The Dark Mark",
                			'type'	:  'event',
                			'associatedPlace' :  'The Quidditch Trillenium Stadium',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_3.m4v',
                			'duration' : '69',
                			'lat'   :  '50.571286',
                			'lon'   :  '-3.920688',
                			'abt'   :  "After several hours of discussing the game, the two Weasley tents quiet down and sleep. Mr. Weasley awakens Harry and tells him to get outside the tent. He does so, and he see a crowd of masked, hooded wizards marching through camp. He sees Mr. Roberts, his wife, and his kids levitating above them. It is an awful sight, and Harry, Ron, and Hermione run to the woods; there, they find Draco Malfoy leaning against a tree and looking pleased. He explains to them that the crowd is rampaging against Muggles and Mudbloods (an offensive term for wizards who, like Hermione, are born of Muggle parents). The three friends ignore him and suddenly Harry realizes that he cannot find his wand. In this midst of this chaos, they spy Winky the house-elf limping along, squeaking fearfully to herself. Ludo Bagman then appears near them, looks alarmed, and disappears. Moments later, they hear a spell mumbled and see a green smoky skull with a snake in its mouth, arising high in the sky. The woods around them erupt in screams. Suddenly many wands are aimed at Harry, Ron, and Hermione, who duck in time to escape being stupefied.Mr. Weasley comes to rescue them, but not before Mr. Crouch storms over and asks which of them conjured the Dark Mark. The three explain that they heard a voice summoning it, but Mr. Crouch suspects them. At this point, Mr. Diggory goes into the trees and emerges holding an unconscious Winky in his arms, as well as a wand he found in her hand. Mr. Crouch is horrified and defensive, and Mr. Diggory brings Winky back to consciousness to ask what happened. She says that she did not do it, and Harry notices that the wand she was holding is his. This causes a new wave of suspicion, especially when Mr. Diggory reveals that this wand did in fact summon the Dark Mark. It seems highly unlikely that either Harry Potter or Mr. Crouch's house-elf could or would have conjured the spell, so the frightened group disbands. Hermione is deeply upset to watch Mr. Crouch threatening to fire Winky, and she begins to speak of slavery and elf-rights. As the group returns to their tents, Mr. Weasley reassures the masses that everything is okay, and then he explains to his kids and Harry that Voldemort's followers, the Death Eaters, always made the Dark Mark after killing someone, and as they were the ones levitating the Muggles, they would have been frightened by the Dark Mark into thinking that Voldemort had returned to find that that they had betrayed him, as they had managed to escape being put into Azkaban Prison. Harry is shaken by this knowledge, and he wonders whether it pertains to the pain in his scar three nights before."
                		},

                		{
                			'name'  :  "The Tri-Wizard Tournament",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_4.m4v',
                			'duration' : '114',
                			'lat'   :  '56.598777',
                			'lon'   :  '-4.218979',
                			'abt'   :  "Dinner appears on the tables, and as the students eat, Nearly Headless Nick mentions that Peeves has caused problems with the house-elves in the kitchen. Hermione stares at him, proclaims that Hogwarts is engaging in slave-labor, and refuses to finish her dinner. Soon the headmaster, Dumbledore, rises to address the school. He tells them that the annual Quidditch Cup will not take place this year; before he can tell them what will take its place, he is interrupted by the entrance of a gnarled, grumpy looking man with one large swiveling eye: Mad-Eye Moody, who is the school's new Defense Against the Dark Arts teacher. The students stare silently as Dumbledore introduces him, and they listen in anticipation as Dumbledore proceeds to explain that the Triwizard Tournament, a competition between representatives from each of the three largest European schools of wizardry (Hogwarts, Beauxbatons, and Durmstrang), will take place this year at Hogwarts. It had been discontinued hundreds of years ago because of high death tolls, but the Ministry of Magic has now taken enough precautions for it to continue. He adds that the winner will receive a thousand galleons, and that nobody younger than seventeen years old can enter. The Weasley twins scoff, and that night as Harry falls asleep in his dorm room, he imagines himself entering and winning the Triwizard Tournament. He imagines Cho Chang, a Ravenclaw girl on whom he has a crush, cheering for him."
                		},


                		{
                			'name'  :  "The Four Champions",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_5.m4v',
                			'duration' : '128',
                			'lat'   :  '56.597900',
                			'lon'   :  '-4.218000',
                			'abt'   :  "Dumbledore introduces the Goblet of Fire to the students and explains that those who wish to enter the Tournament should place their name on a slip of paper inside the goblet; he adds that he has drawn an age line around its perimeter, meaning that no one under the age of seventeen can approach. Dinner ends. As Karkaroff is fawning over Krum and leading the Durmstrang students back to their ship, he notices Harry and stares. Moody approaches and angrily tells Karkaroff not to hold up the line.Everybody eats. After dinner, the Goblet of Fire begins to spark, and it spits out slips of paper: Fleur Delacour (the Veela girl) is the champion for Beauxbatons; Viktor Krum for Durmstrang; Cedric Diggory for Hogwarts. When all seems finished, the Goblet spits out another name: Harry Potter."
                		},

                		{
                			'name'  :  "The First Task",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_6.m4v',
                			'duration' : '68',
                			'lat'   :  '56.597900',
                			'lon'   :  '-4.219000',
                			'abt'   :  "The morning of the task, the four nervous champions are led into a tent in the forest, allowed to pluck from a bag a model of the dragon they are to fight, and told that their goal is to get the golden egg. Harry is to go fourth and fight the Hungarian Horntail. He listens as the crowd reacts to the work of the other three champions, and when his turn comes, he walks into the enclosure, summons his broomstick, and flies around the dragon, feeling at ease for the first time in the whole tournament, and getting the egg in what Ron afterwards tells him was the best and fastest of the four methods. All of the champions got the egg eventually, but Cedric and Fleur were charred a bit, and Krum causes his dragon to step on several of her real eggs. Ron and Harry are reunited afterwards, as Ron was terrified for Harry's life and realized that Harry would never put himself in that position just for attention. The champions are told that their golden eggs will clue them in on the second task, which will take place in three months. Harry is relieved and happy as he walks back toward the castle with Ron."
                		},

                		{
                			'name'  :  "The Yule Ball",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_7.m4v',
                			'duration' : '114',
                			'lat'   :  '56.597900',
                			'lon'   :  '-4.218600',
                			'abt'   :  "At the ball, Harry and Parvati are seated at the head table with the other champions, including Cedric and Cho, as well as Krum and a beautiful girl who turns out to be Hermione. Ron, who has annoyed his date by staring glumly at Hermione all night, accuses Hermione of fraternizing with the enemy.Percy Weasley attends the ball in place of Mr. Crouch, who is ill; and Harry and Ron ditch their already annoyed dates and rush outside to avoid listening to Percy. On their walk, they overhear Snape and Karkaroff deep in some mysterious discussion, and then they find Fleur in a rosebush, passionately involved with her date. Finally, Harry and Ron overhear Hagrid confide in Madame Maxime that he is half-giant, like her. She yelps at this accusation and leaves, insulted. As he accidentally overhears, Harry tries to focus on a small black beetle that is flying around them. They return to the dance, which is not much fun, and as they leave, Cedric quietly advises Harry to listen to his egg while taking a bath; he offers the Prefect's bathroom for this purpose. Harry enters the Gryffindor common room to find Ron and Hermione in a heated fight, which ends with Hermione shouting, 'Next time there's a ball, ask me before someone else does, and not as a last resort!'"
                		},


                		{
                			'name'  :  "The Second Task",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_8.m4v',
                			'duration' : '70',
                			'lat'   :  '56.598100',
                			'lon'   :  '-4.218600',
                			'abt'   :  "Having no other alternative, Harry runs down to the lake, eats the gillyweed, and dives into the water with the other three champions.Harry grows gills, and can swim quite easily. At the bottom of the lake he finds the village of the mer-people, and he sees Ron, Hermione, Cho, and a girl who must be Fleur's younger sister, all asleep and tied together. Harry uses a rock to free Ron, and he waits to see if the others will be rescued. Cedric eventually comes for Cho, and Krum for Hermione, but Fleur never arrives. So Harry fends off the ugly, broken-toothed, oddly-colored, aggressive mer-people with his wand, and carries both Ron and Fleur's sister to the water's surface. He is the last to arrive, and he feels foolish for waiting around underwater when he could have come up first. A mermaid swims to the surface and informs Dumbledore that Harry was the first to arrive, but waited to make sure all four hostages were rescued, so Harry receives very high marks from the judges on his completion of the second task. Fleur is grateful and kisses both Ron and Harry. Hermione is so preoccupied with Harry that she ignores Krum as he plucks a water-beetle from her hair. Harry is immensely grateful to Dobby, and plans to buy him pairs and pairs of socks."
                		},


                		{
                			'name'  :  "The Pensieve",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_9.m4v',
                			'duration' : '105',
                			'lat'   :  '56.598759',
                			'lon'   :  '-4.218600',
                			'abt'   :  "Harry waits in Dumbledore's room while the three adults examine the grounds for clues; as he waits, he observes Fawkes, Dumbledore's pet phoenix, and he also notices in a half-open cupboard a basin containing something silvery and swirling. Harry studies it, pokes it with his wand and looks closer, ultimately touching his nose to it and falling in; he lands in a courtroom, where he is an unseen observer among a grave audience (including a slightly younger Dumbledore and Moody). Harry watches as Karkaroff is strapped into a chair at the room's center and questioned by Mr. Crouch, who has agreed to set him free from Azkaban in exchange for the names of other Death-Eaters. Karkaroff gives many names, including Snape-but Dumbledore stands up and vouches for Snape, who had left Voldemort and agreed to work as a spy for the good side. Suddenly the room dissolves, and Ludo Bagman is sitting in the same chair, pleading that he didn't realize that he was working for Voldemort's supporters. The audience votes to forgive him, presumably due to their admiration of his Quidditch abilities. The room dissolves a third time and reveals Mr. Crouch's son in the center of the room, pleading to be let go, while his strict father accuses him of many awful things, including subjecting the Longbottoms to the Cruciatus curse. Mr. Crouch's wife is weeping in the audience as Mr. Crouch sentences his only son to a lifetime in Azkaban.Dumbledore pulls Harry out of the room and back into his office, where he explains that the basin is a Pensieve, a holder for excess thoughts and memories. He does not seem at all upset that Harry was poking around in his office. Harry tells Dumbledore about his dream, and Dumbledore expresses his belief that the dream is probably true, that Voldemort is near and dangerous, and that the three recent disappearances of Bertha Jorkins, Mr. Crouch, and a Muggle named Frank Bryce, may be traceable to Voldemort. Harry considers this, then asks whether the Longbottoms mentioned were Neville's parents. Dumbledore replies bitterly that they are, and says that they were very popular Aurors who went insane after being subjected to the curse, which is why Neville lives with his grandmother. Harry asks also whether Bagman or Snape has been convicted of any Dark activity since that time. Dumbledore answers, with conviction, that neither has, before bidding Harry goodbye and good luck on the third task"
                		},


                		{
                			'name'  :  "The Third Task",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_10.m4v',
                			'duration' : '55',
                			'lat'   :  '56.599759',
                			'lon'   :  '-4.218600',
                			'abt'   :  "After breakfast, the families of the champions arrive at Hogwarts to watch the final task, and Bill and Mrs. Weasley come to watch Harry; they stroll the grounds all afternoon, and at dusk, the champions are placed at the entrances to a giant hedge maze, at the center of which the winner would find the trophy.Harry and Cedric are currently tied for first place, so they go first into the maze, followed by Krum and Fleur. Harry's path is remarkably quiet. He runs into a boggart disguised as a dementor, which he passes easily, and at one point he runs through a mist that temporarily turns the world upside down. He hears Fleur scream, and as he runs forward, he encounters one of Hagrid's Skrewts, which is ten feet long and aggressive. Harry passes the Skrewt. He hears Krum mutter, 'Crucio', and hears Cedric scream. Harry burns a hole in the hedge and saves Cedric by stupefying Krum. The two Hogwarts boys continue, shaken, through the maze. Harry passes a sphinx, answers her riddle, and sees the Triwizard Cup ahead. He and Cedric both run for it. They are barred by a giant spider, which together they defeat. Harry breaks his leg in the process. Unable to decide who should have the trophy, since they both helped each other out numerous times throughout the tournament, they decide to touch it at the same time, both winning. They do, and the Cup, it turns out, is a portkey."
                		},


                		{
                			'name'  :  "Voldemort Returns",
                			'type'	:  'event',
                			'associatedPlace' :  'Little Hangleton',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_11.m4v',
                			'duration' : '140',
                			'lat'   :  '54.625862',
                			'lon'   :  '-3.240967',
                			'abt'   :  "Harry and Cedric land in an eerie graveyard far away from Hogwarts. Coming towards them, they see a hooded man carrying what looks like a baby. Suddenly, Harry's scar sears with pain, as he hears a cold voice say, 'Kill the spare.' The voice is followed by a second, which says, 'Avada Kedavra.' Cedric is killed instantly. As Harry stares at Cedric, horrified, the hooded man ties Harry tightly to a tombstone of a man named Tom Riddle. Harry recognizes the man in the hood as Wormtail. Harry watches as Wormtail boils water in a giant cauldron, unwraps the bundled object (which is scaly, red, and has a flat snakelike face) and drops it into the cauldron. Harry hopes silently that it will drown.Wormtail begins speaking. He summons dust from Tom Riddle's grave to renew his son. Wormtail says 'Flesh of the servant,'' and slices off his right hand, dropping it into the cauldron. Finally, he draws blood from Harry's upper arm, adding 'Blood of the enemy' to the cauldron. From the cauldron's simmering depths, a tall, thin man rises. Harry knows that Lord Voldemort has risen again.He turns to Harry and says 'Crucio!'' placing Harry in more pain than he has ever felt before. Then he commands Wormtail to untie Harry and give him back his wand.A shadow of a hand blossoms out of the tip of the wand, followed by a shade of Cedric, then an old Muggle (Frank Bryce), then Bertha Jorkins, then Harry's parents. They crowd around him, each of them telling him to hold on, and finally his mother tells him quietly that once he lets go, they will linger long enough to give him time to touch the portkey and return to Hogwarts. Cedric asks that Harry take his body back to his parents, and Harry nods, pulls his wand away from the connection, causing the light dome and phoenix song to disappear. The shadows of the victims remain and close in upon Voldemort while Harry runs to grab Cedric. Just as Voldemort is approaching him ready to strike, Harry summons the Triwizard Cup to him, with the 'Accio!'' charm he learned for the first task. He grips Cedric's body and feels himself spinning away, and in the distance he can hear Voldemort's cry of fury.Harry falls into the grass at Hogwarts, still clutching Cedric. Dumbledore gently commands him to let go. Around them, cries of 'Diggory's dead!' sound in the air, and Dumbledore leaves to talk with Cedric's parents, after instructing Harry to remain where he is. "
                		},


                		{
                			'name'  :  "Moody is Barty Crouch Jr.",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_12.m4v',
                			'duration' : '160',
                			'lat'   :  '56.599909',
                			'lon'   :  '-4.218650',
                			'abt'   :  "Harry is grabbed by a pair of hands and dragged toward the castle, and only once he is there does he recognize his carrier as Moody. Moody sets Harry in his office and asks him what happened. As Harry explains in panic that Voldemort is back, Moody seems interested in knowing whether Voldemort forgave the Death Eaters who left him. Harry explodes with the information that there is a Death Eater at Hogwarts, and Moody assures him that it is not Karkaroff, who fled once he felt the Dark Mark Burn on his arm, but rather that he himself is the supporter. He says that he placed Harry's name into the Goblet of Fire and fired the Dark Mark into the sky. He claims that he alone remained faithful to Voldemort while everybody else left his side, and that he rigged the tournament so that Harry would be sure to reach the portkey Cup first.Moody explains that he had nudged Hagrid into showing Harry the dragons, that he gave Neville a book about Mediterranean plants, including gillyweed, in hope that Harry would ask him for help, and finally that he had spoken loudly about gillyweed in a place where Dobby was sure to overhear. Moody says that in the maze, he stunned Fleur and placed the Imperius Curse on Krum, instructing him to finish off Cedric. Moody then raises his wand to finish off Harry, saying madly that he will be cherished as a son by Voldemort. The door bursts open. Dumbledore, Snape, and McGonagall enter, stupefying Moody.Harry has never seen Dumbledore look so angry and so powerful, and he understands in an instant why he is the only wizard that Voldemort ever feared. Dumbledore says that Harry must not go to bed until he understands everything that has happened, and he begins by telling Snape to fetch him a strong truth potion—Veritaserum—and to summon Winky from the kitchens. He tells McGonagall to tell a large black dog to wait in his office. Then he takes a key-ring from the stupefied Moody, and he begins opening the seven locks on the trunk in the room. He and Harry see a sleeping, disheveled man-the real Alastor Moody. Dumbledore explains that the impostor Moody had been making Polyjuice potion from the real Moody's hair (which is missing in chunks), and drinking it from his hip flask at every hour, thus giving him Moody's appearance. Time passes, and the sleeping figure changes from Moody into a pale young man whom Harry recognizes from the Pensieve as Mr. Crouch's son."

                		},

                		{
                			'name'  :  "The Loss and Parting of the Ways",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/goblet.png',
                			'url'   :  '../../videos/4_13.m4v',
                			'duration' : '185',
                			'lat'   :  '56.599909',
                			'lon'   :  '-4.218830',
                			'abt'   :  "On the night before leaving Hogwarts, the Great Hall is decorated in black to mourn Cedric, and during the dinner Dumbledore announces to everybody that Cedric was, in fact, murdered by Voldemort, and that Harry Potter risked his life to bring back Cedric's body. He says further that the time has come for everybody to understand the true merit of the Triwizard Tournament, which is to promote magical ties and understanding. He adds that Cedric was a good, brave, honest person who died unnecessarily at the hands of Voldemort. He says to think of the death as an example of how dangerous conversions to Dark Magic can be.As the students bid each other farewell and prepare to board the Hogwarts Express back to London, Ron asks Krum for his autograph. On the train, Hermione shows Ron and Harry a beetle in a jar. She has caught Rita Skeeter, an unregistered animagus, who had been buzzing around Hogwarts collecting information for her untruthful articles. Malfoy and his cronies enter the train compartment at this point, and he says that Harry has picked the losing side, because Voldemort will triumph. At the same time, Harry, Hermione, Ron, and Fred and George strike them with various minor curses, knocking them out entirely. The Weasley twins explain the blackmailing fiasco, saying that Ludo Bagman paid them their winnings in Leprechaun gold, and that he was deeply in financial trouble with quite a few people and goblins at that point. At the end of the train ride, Harry pulls the twins aside and gives them his gold, telling them to use it for Weasleys' Wizard Wheezes, and also to buy Ron a new set of dress robes. They accept the gift gratefully, and Harry returns to live with the Dursleys for the summer."

                		},


                		{
                			'name'  :  "Dudley Demented",
                			'type'	:  'event',
                			'associatedPlace' :  'Privet Drive',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_1.m4v',
                			'duration' : '69',
                			'lat'   :  '51.221865',
                			'lon'   :  '0.170811',
                			'abt'   :  "Harry wanders off to a local playground. He is upset that he has heard very little news from his best friends and schoolmates, Hermione and Ron. Harry takes a seat on the swings and watches as his cousin, Dudley, leading a gang of delinquents, slinks past. Harry knows Dudley is scared of Harry’s magical powers and suppresses the urge to taunt Dudley with his wand. After Dudley passes, Harry gets up and follows Dudley home. He approaches Dudley, and the two boys begin to argue. When they reach the alley off of Magnolia Crescent, the night becomes pitch black and very cold. Harry realizes that dementors are about to attack. After much struggle, Harry uses his wand to summon a Patronus stag, and the stag saves both boys. Mrs. Figg, Harry’s neighbor, comes running toward them, and Harry instinctively tries to hide his wand. Mrs. Figg begs him to keep his wand out, in case more dementors lurk nearby.Harry and Dudley return to Privet Drive. As they ring the doorbell, Dudley vomits and falls over. Aunt Petunia and Uncle Vernon answer the door and fuss over him, demanding to know exactly what happened. Dudley points to Harry, and as Harry begins to explain, an owl flies through an open window, dropping a letter that expels Harry from Hogwarts for improper use of magic and announces that someone will be arriving shortly to destroy his wand. A few moments later, another letter arrives, this time from Ron’s father, Arthur Weasley. The letter tells Harry that Dumbledore is attempting to sort the issue out with the Ministry of Magic and that Harry should not surrender his wand or leave the house.Harry continues trying to explain the dementor attack to his aunt and uncle. To Harry’s surprise, Aunt Petunia confirms that dementors guard the prison at Azkaban, something she claims that she once heard Harry’s parents talking about. Another owl arrives, with a second letter from the Ministry of Magic. This letter states that Harry is allowed to retain his wand until a disciplinary hearing on August 12. Another owl arrives, this time carrying a letter from Harry’s godfather, Sirius. Sirius warns Harry not to leave the house. Aunt Petunia seems horrified by Harry’s announcement that Lord Voldemort has returned. Her concern is strange to Harry, since she has never acknowledged or expressed interest in the world of magic before. Uncle Vernon is upset by the threat of the dementors and Voldemort and orders Harry to leave his house immediately. A fifth owl arrives, carrying a carrying a special kind of letter known as a Howler, which literally howls its message to its recipient. The owl bypasses Harry and deposits the letter on Petunia’s head. The letter howls: “Remember my last, Petunia.” Petunia demands that Harry stay, despite Vernon’s wishes. Petunia refuses to tell Harry what the message means and insists that he not leave his room."

                		},

                		{
                			'name'  :  "The Order of Phoenix",
                			'type'	:  'event',
                			'associatedPlace' :  'The HeadQuarters of the Order of Phoenix',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_2.m4v',
                			'duration' : '128',
                			'lat'   :  '51.513398',
                			'lon'   :  '-0.131063',
                			'abt'   :  "Harry hears a loud crash. His door unlocks and swings open. Harry heads downstairs to investigate and is greeted by a group of nine wizards: Mad-Eye Moody, Professor Lupin, Nymphadora Tonks, Kingsley Shacklebolt, Elphias Doge, Dedalus Diggle, Emmeline Vance, Sturgis Podmore, and Hestia Jones. They have come to transport him somewhere safe to await his hearing without further danger. While packing, Harry learns that Tonks is a Metamorphmagus and can change her appearance at will. Lupin writes a letter for the Dursleys, assuring them that Harry is safe and will return home next summer. Harry and the others mount their flying broomsticks and take off into the cold night, finally landing in a run-down looking part of London. Moody hands Harry a piece of paper that reads, “The Headquarters of the Order of the Phoenix may be found at number twelve, Grimmauld Place, London,” and orders Harry to memorize it.The wizards rush Harry into number twelve. The building is decrepit, with peeling wallpaper and a threadbare carpet. Ron’s mother, Mrs. Weasley, emerges from a door and hurries toward them, pulling Harry into a hug. She orders Harry upstairs, promising that Ron and Hermione will fill him in. Harry’s friends greet him excitedly, but Harry is still angry and screams at them for keeping him in the dark all summer. He notices where Hedwig pecked at their hands, and for a brief moment, Harry is happy to see their cuts. Ron and Hermione explain that Dumbledore made them promise not to send Harry any messages with specific news and that the Order of the Phoenix is a secret society, comprised of people who wish to prevent Voldemort’s return to power. The Order has been busy following known Death Eaters and standing guard over Harry. Harry also learns that Ron’s brother, Percy, has betrayed his family in order to support the corrupt Cornelius Fudge at the Ministry of Magic. Hermione tells Harry how the Daily Prophet has been building a case against Harry all summer, portraying him as an egotistical liar. Ron, Hermione, and Harry head downstairs to dinner, where Harry sees his godfather, Sirius Black.Sirius explains that number twelve was his parents’ house and now belongs to him. He has offered it to Dumbledore as a meeting spot. During dinner, Sirius gets into a fight with Mrs. Weasley over how much information Harry should be made privy to. Mrs. Weasley would prefer that Harry not be told anything, but Sirius and Lupin convince her that there are certain things he needs to know. Sirius tells Harry that while Dumbledore thinks Voldemort is building his army back up, the Ministry of Magic refuses to accept that Voldemort is back. Instead, Fudge fears that Dumbledore is plotting to overthrow him, taking the position of Minister himself. Harry also learns that Voldemort is attempting to gain access to some kind of secret weapon, but Mrs. Weasley stops the conversation before Harry can learn more."

                		},


                		{
                			'name'  :  "The Hearing",
                			'type'	:  'event',
                			'associatedPlace' :  'The Ministry of Magic',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_3.m4v',
                			'duration' : '55',
                			'lat'   :  '51.504387',
                			'lon'   :  '-0.126452',
                			'abt'   :  "On the morning of his hearing, Harry wakes up early. He heads downstairs for breakfast and finds Mr. and Mrs. Weasley, Sirius, Tonks, and Lupin waiting for him in the kitchen. They wish Harry luck, and he and Mr. Weasley leave for the Ministry of Magic. They enter the Ministry through a phone booth, and Mr. Weasley takes Harry to wait in his office. There, Mr. Weasley’s partner, Perkins, breathlessly informs them that the time and place of Harry’s hearing have changed. Mr. Weasley looks at his watch and realizes they’re already late. Dragging Harry behind him, he sprints toward the courtroom, where he drops Harry off.Cornelius Fudge reprimands Harry for being late. The Wizengamot trying Harry is made up of about fifty wizards and witches, led by Cornelius Fudge, who is seated next a toadlike woman named Delores Umbridge. Percy Weasley is present to transcribe the proceedings. As the hearing begins, Dumbledore breezes into the room, declaring himself a witness for the defense. Dumbledore does not look at Harry. The hearing begins. Members of the Wizengamot seem impressed that Harry was able to conjure a full Patronus but do not appear to believe Harry’s story about dementors appearing in Little Whinging. Dumbledore calls Mrs. Figg as a witness, and she nervously corroborates Harry’s story. Fudge still refuses to believe that dementors, who are under strict Ministry control, escaped Azkaban to terrorize a Muggle suburb. The Wizengamot votes, and Harry is cleared of all charges. Before Harry can thank Dumbledore, Dumbledore dashes out of the dungeon."

                		},


                		{
                			'name'  :  "Professor Umbridge",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_4.m4v',
                			'duration' : '99',
                			'lat'   :  '56.598667',
                			'lon'   :  '-4.218400',
                			'abt'   :  "Ron, Harry, and Hermione report to their first session of Professor Umbridge’s Defense Against the Dark Arts class. Professor Umbridge has written her course aims on the blackboard, and Hermione points out that she’s listed nothing about using the defensive spells, only studying them. Professor Umbridge explains that the Ministry does not want underage wizards practicing spells that are dangerous and unnecessary. Harry explodes, explaining that they must be prepared to fight Voldemort. Professor Umbridge insists that Voldemort has not returned and gives Harry detention every night for a week. Harry is sent to see Professor McGonagall, who tells Harry to be mindful of who Umbridge is and to whom she is reporting."

                		},


                		{
                			'name'  :  "Dumbledore’s Army",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogsmeade Village',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_5.m4v',
                			'duration' : '92',
                			'lat'   :  '56.593737',
                			'lon'   :  '-4.214750',
                			'abt'   :  "Hermione asks Harry if he has thought any more about teaching Defense Against the Dark Arts. After much convincing, Harry finally agrees to lead the group. Hermione quietly spreads the word about a meeting to discuss a student-run Defense Against the Dark Arts group on the next Hogsmeade trip and arranges for everyone to meet at the Hog’s Head, a pub, to discuss the details. Hermione tells Harry she expects only a few people to come, but twenty-five arrive. Hermione introduces Harry, explaining that the students need to learn real, practical Defense since Voldemort has returned. Some students murmur in dissent, but all seem interested in Harry’s story about meeting Voldemort face to face. Hermione passes around a piece of parchment, and everyone signs his or her name.Studying in the Common Room later, Harry falls asleep by the fire. Dobby, the House Elf, wakes him up. Harry asks Dobby if he knows of a room where the students could practice Defense secretly. Dobby tells Harry about the Room of Requirement, which appears only when it is needed. Harry calls a meeting for the next night. Students arrive, and Hermione suggests that they decide on a name. Cho Chang, whom Harry has had a crush on for some time, suggests the D.A., for Defense Association, and Ginny points out that it can also stand for Dumbledore’s Army. Hermione writes Dumbledore’s Army on a piece of parchment with everyone’s names and pins it to the wall. They begin practicing, and Harry is impressed by their effort."

                		},

                		{
                			'name'  :  "Mr.Weasley attacked",
                			'type'	:  'event',
                			'associatedPlace' :  'The Ministry of Magic',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_6.m4v',
                			'duration' : '92',
                			'lat'   :  '51.504187',
                			'lon'   :  '-0.126452',
                			'abt'   :  "Harry falls asleep with his head full of thoughts. He dreams that his body feels smooth and powerful. He is a snake, slithering toward a man sitting on the floor, guarding a door. Harry rears from the floor and strikes the man, plunging his fangs into the man’s flesh. Harry wakes up with Ron standing over him. Harry is sweating and in extreme pain. His scar is burning hotter than ever. Neville arrives with McGonagall. Harry tells her that Ron’s dad has been attacked by a snake. McGonagall nods and takes Harry to Dumbledore’s office.Harry tells Dumbledore about his vision, and how he inhabited the snake’s body during the attack. Dumbledore calls to the portraits of former headmasters and headmistresses hanging on the walls of his office and asks them to raise the alarm. When the portraits return, they explain that members of the Order have found Mr. Weasley at the Ministry and taken him to St. Mungo’s Hospital for Magical Maladies and Injuries. McGonagall wakes the other Weasley children, and they prepare to travel to Twelve Grimmauld Place by Portkey. As they are leaving, Harry’s scar starts to burn. He looks up at Dumbledore with a powerful hatred, fighting the urge to attack him. He is thrust back to number twelve. Harry tells Fred, Ginny, George, and Sirius about his vision but does not mention that he actually inhabited the snake. A letter from Mrs. Weasley arrives, announcing that Mr. Weasley is still alive.Mrs. Weasley returns from St. Mungo’s and thanks Harry for his vision, which she believes saved Mr. Weasley’s life. The Weasleys and Harry agree to stay with Sirius for the holidays. Harry tells Sirius the whole truth about his vision, including the rage he felt at Dumbledore right before they left Hogwarts. Sirius tells him not to worry."

                		},


                		{
                			'name'  :  "Breakout at Azkaban",
                			'type'	:  'event',
                			'associatedPlace' :  'Azkaban',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_7.m4v',
                			'duration' : '34',
                			'lat'   :  '60.793389',
                			'lon'   :  '-0.241499',
                			'abt'   :  " Hermione’s Daily Prophet reveals a mass breakout at Azkaban. Ten former Death Eaters, including Lestrange, are loose. Harry realizes this is why Voldemort was so happy last night. They also read that a Ministry of Magic worker named Bode died at St. Mungo’s after being strangled by a dangerous potted plant. Ron recalls his father talking about Bode and remembers that Bode worked in the Department of Mysteries."

                		},

                		{
                			'name'  :  "The Army gets caught",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_8.m4v',
                			'duration' : '81',
                			'lat'   :  '56.598827',
                			'lon'   :  '-4.218608',
                			'abt'   :  "Dobby interrupts to warn the group that Umbridge is on her way, and the students scatter. Malfoy trips Harry and hands him over to Umbridge. Umbridge drags Harry to Dumbledore’s office, where Cornelius Fudge is waiting, and fetches her informant, a Ravenclaw named Marietta. Because Hermione jinxed the scroll with the D.A.’s names against snitches, Marietta’s face is covered in giant purple pimples spelling the word “Sneak.” Marietta refuses to uncover her face to speak. Dumbledore takes full responsibility for the D.A. He points to the title on the parchment, identifying the group as Dumbledore’s Army. When the Minister attempts to arrest him, Dumbledore sends a streak of silver light through his office and disappears.Umbridge replaces Dumbledore as Headmistress and appoints an Inquisitional Squad of students, which is comprised mostly of Slytherins, including Draco Malfoy, to do her bidding. The Squad has the power to dock points from Houses, which Malfoy does happily. Fred and George swear to make Umbridge’s life at Hogwarts difficult, and they set off a crate of fireworks in the Great Hall. Umbridge’s magic does not work on the fireworks, and the faculty refuses to help her. Firecrackers explode for the rest of the afternoon."

                		},


                		{
                			'name'  :  "Sirius is dead",
                			'type'	:  'event',
                			'associatedPlace' :  'The Ministry of Magic',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_9.m4v',
                			'duration' : '150',
                			'lat'   :  '51.504787',
                			'lon'   :  '-0.126252',
                			'abt'   :  "Harry demands to know where Sirius is. Malfoy asks Harry to give him the prophecy, but Harry refuses to relinquish the sphere, threatening to smash it if the encroaching crowd of Death Eaters attack his friends. Malfoy tells him the sphere contains the story of his scar and explains that only those about whom a prophecy has been made can safely retrieve it. Voldemort could not come himself because the Aurors at the Ministry would have caught him immediately, so they lured Harry here by manipulating his dreams and making him think Sirius was in trouble.At Harry’s signal, the students use their wands to shatter the rows of spheres. Harry sprints from the chamber, gripping his prophecy. The Death Eaters follow. Hermione is stunned by a Death Eater and falls to the ground. Neville’s nose is broken in the fray. Ron falls under some sort of lunacy spell, and Ginny’s ankle is broken by a Death Eater. Dragging Hermione, they keep moving, but five Death Eaters corner them in the brain room. The brain jar bursts open, and Ron picks one up. Tentacles shoot out and try to strangle Ron. Death Eaters stun Ginny and toss Luna into a desk. Both lie unconscious, leaving only Neville and Harry to fight the remaining Death Eaters. Harry, still clutching the prophecy, runs into the room with the arch. Neville follows, and Lestrange begins to torture Neville with the Crucio curse.Suddenly, Sirius, Lupin, Moody, Tonks, and Kingsley appear. Sirius yells for Harry to take Neville and the prophecy and run. As Harry attempts to grab Neville, the prophecy slips from his robes and cracks open. Dumbledore appears and corrals the Death Eaters. Lestrange, dueling with Sirius, sends a jet of red light right into his chest, and he falls through the curtains. Harry runs to the arch, but Lupin holds him back. Lupin tells Harry that Sirius is gone."

                		},


                		{
                			'name'  :  "Dumbledore vs Voldemort",
                			'type'	:  'event',
                			'associatedPlace' :  'The Ministry of Magic',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_10.m4v',
                			'duration' : '163',
                			'lat'   :  '51.504444',
                			'lon'   :  '-0.126454',
                			'abt'   :  "Voldemort and Dumbledore appear. Voldemort strikes Dumbledore, but Dumbledore’s bird, Fawkes, takes the blow. Voldemort disappears, and Harry’s scar bursts open. Voldemort uses Harry’s voice to speak to Dumbledore, asking Dumbledore to kill him by killing Harry. Suddenly, Harry feels Voldemort leave his body, and he crumples to the floor. Harry learns that Voldemort had grabbed Lestrange and Disapparated from the Ministry. Cornelius Fudge runs in, confused."

                		},

                		{
                			'name'  :  "Leaving with Friends",
                			'type'	:  'event',
                			'associatedPlace' :  'Hogwarts School of Witchcraft and Wizardry',
                			'icon'  :  '../../images/phoenix.png',
                			'url'   :  '../../videos/5_11.m4v',
                			'duration' : '29',
                			'lat'   :  '56.598027',
                			'lon'   :  '-4.219008',
                			'abt'   :  "The day before the end of term, Umbridge leaves the school. Ron rushes off to the Great Feast, but Harry stays behind to pack. Harry finds the wrapped package Sirius gave him at Christmas. He rips the paper off and finds a mirror with an inscription on the back, instructing Harry to use it to communicate with Sirius. Harry shouts into the mirror but receives no reply. Devastated, Harry throws the mirror down, and it shatters. Harry decides to seek advice from a Hogwarts ghost and finds Nearly Headless Nick. Nick explains that not all dead wizards are turned into ghosts. Harry, upset, runs into Luna, who asks about Sirius. Remembering that Luna can see the thestrals, he asks her if anyone she has known has died. Luna says her mother died when she was nine. She tells Harry that the voices behind the curtain at the Department of Mysteries are the voices of wizards who have died. Harry is not sure whether to believe her or not.The next day, all Hogwarts students board the Hogwarts Express. Cho walks by, and Harry does not meet her eyes. He tells Ron that nothing is going on with Cho anymore, and Hermione gently informs him that Cho is now dating Michael Conner. The news doesn’t bother Harry. When the train pulls into Kings Cross, Harry sees several members of the Order waiting for him. Lupin spots the Dursleys, and Moody, Tonks, and Mr. Weasley insist that they treat Harry fairly while he is home for the summer. Moody tells Harry that if he doesn’t hear from him for three days in a row, he will send someone to check up on him. Ron and Hermione promise to see him soon, and Harry heads back to Four Privet Drive."

                		},


                		{
                			'name'  :  "The Unbreakable Vow",
                			'type'	:  'event',
                			'associatedPlace' :  "Spinner's End",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_1.m4v',
                			'duration' : '101',
                			'lat'   :  '51.505973',
                			'lon'   :  '-0.005236',
                			'abt'   :  "Two shadowy, hooded figures pop out of thin air on the banks of a dark, dirty river. The first figure, Narcissa, runs off and is pursued by the second, Bellatrix (or Bella). Bella desperately implores Narcissa to stop. When Bella finally catches hold of Narcissa’s cloak, she begs her not to betray Voldemort. Narcissa draws her wand, and Bella expresses shock that Narcissa would threaten her own sister. They continue, finally arriving at Severus Snape’s house. Snape is a professor of Potions at the Hogwarts School, Head of the House of Slytherin, and a supposedly reformed Death Eater. Snape is also a member of the Order of the Phoenix, a group dedicated to the destruction of Voldemort. Bellatrix bitterly explains to Snape that she doesn’t trust him, because he continues to swear allegiance to Dumbledore, the headmaster of Hogwarts, and has not yet managed to kill Harry Potter.Snape explains that he is working undercover at Hogwarts and cannot compromise his cover. Irritated, Snape alludes to Bellatrix’s inability to kill Potter last year when they fought face to face at the Ministry of Magic, when Harry and Voldemort were both attempting to gain access to an ancient prophecy concerning their relationship. In response, Bella blames Lucius Malfoy for Harry’s survival at the Ministry. Lucius is Narcissa’s husband and the father of Draco Malfoy, a schoolmate of Harry’s. Narcissa is livid that Bellatrix would suggest that her husband failed in his duties. Snape reminds the sisters that Harry is not an exceptional wizard and only continues to survive through a combination of sheer luck and a group of talented friends. Narcissa, sobbing, tells Snape that she believes her only son, the sixteen-year-old Draco, will have to perform the unnamed task. Narcissa believes this is payment for Lucius’s failure to retrieve the prophecy from the Ministry. Narcissa falls to the floor, sobbing and moaning. Finally, Snape agrees to help Draco. Narcissa requests that he make the Unbreakable Vow, promising to watch over Draco as he performs this task, protect him from harm, and, if necessary, carry out the deed himself. Snape agrees."

                		},

                		{
                			'name'  :  "The Half Blood Prince",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_2.m4v',
                			'duration' : '84',
                			'lat'   :  '56.598127',
                			'lon'   :  '-4.219038',
                			'abt'   :  "Harry heads off to Slughorn’s Potions class. Harry and Ron ask Slughorn to borrow two Potions textbooks. Slughorn complies, digging two used books out of a cupboard. Slughorn tells the class that the creator of the best potion will win a small vial of Felix Felicis, an extraordinarily lucky potion. Harry opens his used textbook to the appropriate page, but he finds it difficult to read because the previous owner has scribbled notes all over the pages. Finally, Harry opts to follow the alternate instructions written in the margins, and his potion turns out perfectly. Slughorn is delighted and awards Harry the vial of Felix Felicis, but Hermione is outraged and accuses Harry of cheating. Harry notices some writing along the bottom of the back cover. It reads: “This Book is the Property of the Half-Blood Prince.”"

                		},


                		{
                			'name'  :  "Little Tom Marvolo Riddle",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_3.m4v',
                			'duration' : '89',
                			'lat'   :  '56.596127',
                			'lon'   :  '-4.219038',
                			'abt'   :  "Harry and Dumbledore enter one of Dumbledore’s memories. A much younger Dumbledore approaches the door of an orphanage and asks to speak with the house matron, Mrs. Cole. When she arrives, Dumbledore explains that he is here to offer Tom Marvolo Riddle a place at his school. Mrs. Cole warns Dumbledore that Tom Riddle is a funny boy, and Dumbledore is not surprised. Tom regularly bullies the other children, killing one child’s pet rabbit and leading two other children into a cave at the seaside. After emerging from the cave, the two are never the same again. Mrs. Cole leads Dumbledore to Tom, who is handsome. Dumbledore introduces himself, but Tom is suspicious until Dumbledore tells him that Hogwarts is a school for magic. Tom is excited, but rude and belligerent, demanding that Dumbledore prove himself. In response, Dumbledore sets Tom’s wardrobe on fire with a flick of his wand.Dumbledore puts out the flames and asks Tom to retrieve a box from inside his wardrobe full of things Tom has stolen from his fellow orphans. Dumbledore demands that he return them before enrolling at Hogwarts. Dumbledore offers to accompany Tom to Diagon Alley to purchase his school supplies, but Tom insists on going by himself. Tom also tells Dumbledore that he dislikes his name because it is too common. Harry and Dumbledore return to Hogwarts. On his way out of Dumbledore’s office, Harry notices that Marvolo’s ring is gone."

                		},


                		{
                			'name'  :  "The Key Memory",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_4.m4v',
                			'duration' : '83',
                			'lat'   :  '56.596127',
                			'lon'   :  '-4.219338',
                			'abt'   :  "Dumbledore pulls out another vial of memories, but it is unusually cloudy. They re-enter the Pensieve, and Harry sees a younger Horace Slughorn sitting with half a dozen boys, including Tom Riddle, who is wearing Marvolo’s ring. The students start to leave, but Tom lags behind and asks Slughorn about Horcruxes. As Slughorn answers, the room becomes extremely cloudy, and Slughorn’s voice sounds strangely loud, telling Tom he doesn’t know anything about Horcruxes. They return to Dumbledore’s office, and he explains that the memory has been tampered with by Slughorn, who did not want Dumbledore to know what really happened when Tom asked about Horcruxes. Dumbledore asks Harry to attempt to retrieve the real memory from Slughorn."

                		},


                		{
                			'name'  :  "Draco onto something",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_5.m4v',
                			'duration' : '76',
                			'lat'   :  '56.596127',
                			'lon'   :  '-4.218638',
                			'abt'   :  "Harry spots Draco scurrying up the street alone. He pulls Ron and Hermione under his Invisibility Cloak, and they follow Draco into Borgin and Burkes, a store stocked with Dark objects.Harry and his friends eavesdrop on Draco’s conversation with Borgin. Draco asks Borgin if he can fix something, threatening the shop owner with something Harry cannot see, and reminding him that his family is friends with Fenir Greyback. Draco suggests that there are two objects, and one needs to be kept safe in the shop. Borgin swears secrecy, and Draco leaves. Hermione ducks out from under the coat, attempting to see what Draco was talking about, but Borgin is suspicious. Hermione asks about a necklace, but Borgin orders Hermione out. Before they board the Hogwarts Express, Harry tells Mr. Weasley his suspicions about Draco being a Death Eater."

                		},


                		{
                			'name'  :  "The Horcruxes",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_6.m4v',
                			'duration' : '103',
                			'lat'   :  '56.596777',
                			'lon'   :  '-4.218638',
                			'abt'   :  "Harry heads toward Hagrid’s, running into Slughorn on the way. Harry explains about Aragog and Hagrid. Slughorn tells Harry that the venom of an acromantula is extremely rare and almost impossible to gather. Harry invites Slughorn to the funeral. Harry, Hagrid, and Slughorn step into Hagrid’s backyard, where a grave has been dug. While Hagrid is crying, Slughorn approaches the giant spider and collects a bottleful of venom. After Aragog is buried, they sit down for drinks.Harry senses that he should abstain from drinking too much, and nonverbally casts a Refilling Charm, making sure Slughorn and Hagrid’s glasses stay full. Hagrid and Slughorn continue to drink heavily. Harry tells Slughorn about the pain of his mother and father dying so young and reminds Slughorn of how much he liked Harry’s mother, Lily. Harry tells a very drunk Slughorn that the only way to stop Voldemort is to give Harry the true memory. Slughorn tells Harry he is not proud of what it contains, but he hands it over anyway. Harry feels the Felix Felicis wearing off and walks back to the castle. Dumbledore is delighted with Harry’s success and empties Slughorn’s memory into the Pensieve. This time, there is no fog or loud voices. When Voldemort asks about Horcruxes, Slughorn explains that a Horcrux is an object in which a person has concealed part of their soul. Even if the person is attacked or destroyed, a small part of his soul lives on outside of his body—and therefore he can never die. Slughorn goes on to explain that very few would want that kind of existence, and that death is often preferable. Splitting one’s soul is an unnatural violation and can only occur when one commits the supreme act of evil, murder.Slughorn tells Voldemort not to repeat anything he has just heard, and the memory ends. Dumbledore tells Harry that he suspects Voldemort has split his soul into seven pieces, and that no wizard has ever attempted multiple Horcruxes. The only way to kill Voldemort is to destroy all seven Horcruxes."

                		},

                		{
                			'name'  :  "The Locket",
                			'type'	:  'event',
                			'associatedPlace' :  "The Cave",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_7.m4v',
                			'duration' : '76',
                			'lat'   :  '52.161424',
                			'lon'   :  '1.521606',
                			'abt'   :  "The entrance to the cave is concealed, and Dumbledore determines that it requires an offering of blood to open. Dumbledore cuts his hand and drips blood onto the stone, opening the passageway. They reach a small pool of water with a green glow emanating from the center. Harry attempts a Summoning Charm on the green glow, but something very large and white erupts from the water in response. Dumbledore tells Harry that it is there to protect the Horcrux. Standing at the water’s edge, Dumbledore waves his wand and summons a tiny boat on a copper chain. Harry and Dumbledore start sailing toward the green light. Harry sees dead human bodies floating in the water, and Dumbledore tells him that they should not worry about them yet, and that like most creatures that dwell in cold and darkness, they are afraid of warmth and light.The glow is coming from a stone basin filled with green liquid. Dumbledore conjures a crystal goblet and tells Harry that the green potion must be drunk before they can retrieve the object at the bottom of the basin. Dumbledore tells Harry that it’s his job to see that Dumbledore continues drinking, no matter how painful it is for Dumbledore. Harry hesitates, but Dumbledore reminds him of the conditions of the trip. Dumbledore drinks three and a half goblets of potion before he falls over. Harry gently lifts the goblet to Dumbledore’s lips and pours the remaining liquid down his throat. Harry repeats this process eight times. Dumbledore collapses and mutters for water. Harry tries to use an Aquamenti spell to fill the glass, but the water disappears as soon as Harry brings it to Dumbledore’s mouth. Harry is forced to plunge the goblet into the lake, and the disruption makes the bodies start moving toward the island.Harry fights them off as best he can, and Dumbledore manages to cause an eruption of fire, which sends the Inferi—the bodies—back into the water. Dumbledore grabs the locket from the bottom of the stone basin, and he and Harry climb back into Voldemort’s boat and retreat. Harry Apparates back to Hogsmeade with Dumbledore at his side. "

                		},

                		{
                			'name'  :  "The Astronomy Tower",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_8.m4v',
                			'duration' : '128',
                			'lat'   :  '56.599977',
                			'lon'   :  '-4.218338',
                			'abt'   :  "The Dark Mark is currently visible over Hogwarts. Dumbledore asks Rosmerta for brooms, and he and Harry fly toward the school. When they arrive at the Astronomy Tower, directly under the Dark Mark, they hear footsteps coming from the opposite direction, and Dumbledore motions for Harry to back off. The door bursts open, and a voice shouts, “Expelliarmus.” Harry is paralyzed. Although he knows that Expelliarmus is not a freezing charm, Harry realizes that Dumbledore has nonverbally frozen him under his Invisibility Cloak.The voice turns out to be Draco Malfoy’s. Dumbledore’s wand has been tossed from his body. Draco spots the two brooms and immediately asks who else is in the tower. Dumbledore asks Draco who else he is working with, and Draco tells him there are Death Eaters at Hogwarts, fighting off Dumbledore’s guards down below. Dumbledore tells Draco to get on with it and kill him, but Draco simply stares at Dumbledore. Dumbledore smiles and tells Draco he, Draco, is not a killer, and that his heart is not in it. Draco still does nothing, and Dumbledore notes that Draco is afraid to act alone. Dumbledore asks him how he smuggled Death Eaters into Hogwarts, and Draco tells him he used the Vanishing Cabinet that Montague was lost in last year. Draco explains that there is another Vanishing Cabinet at Borgin and Burkes, and together they make a passageway. With Dumbledore’s prodding, Draco admits to being behind the cursed necklace and poisoned mead. Draco tells Dumbledore that Snape is a double agent and has been lying to Dumbledore. Even now, Dumbledore insists that Snape is trustworthy.Dumbledore infers that Draco put Rosmerta under an Imperius Curse and had her wait in the bathroom with the necklace. Dumbledore then tells Draco that if Draco were really going to kill him, he would have done it by now. Draco responds by telling Dumbledore that he doesn’t have any options, and that Voldemort will kill Draco and his family if he doesn’t complete the murder. Dumbledore is sympathetic and tells Draco that the Order can help him hide. Draco lowers his wand. Suddenly, four Death Eaters burst through the door. They all command Draco to finish Dumbledore, but Draco still does not move. Snape bursts through the door, and, for the first time, Dumbledore looks frightened. Snape raises his wand and shoots a blast of green light straight at Dumbledore. The force throws Dumbledore out the window to fall to the ground below."

                		},


                		{
                			'name'  :  "The Real Locket",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/6.png',
                			'url'   :  '../../videos/6_9.m4v',
                			'duration' : '81',
                			'lat'   :  '56.599333',
                			'lon'   :  '-4.218338',
                			'abt'   :  "Harry spots the locket they took from the cave, which has fallen from Dumbledore’s pocket, and he picks it up. The locket is not as large as Slytherin’s, nor does it bear his mark. When Harry opens it, he finds a small piece of parchment with a note written to Voldemort. The note’s author, who signs his or her name “R. A. B.,” tells Voldemort that he has discovered his secret, stolen the Horcrux, and intends to destroy it as soon as he can. The author tells Voldemort that he or she hopes that when Voldemort meets his match, he will simply be a mortal man. Harry does not understand the message, nor does he care. Harry only knows that whoever stole the real Horcrux contributed to Dumbledore’s death, causing him to weaken himself by drinking a horrible potion for nothing.Ron and Hermione catch up, and they speculate on whether the school will close. Harry tells them that he’s not coming back. Harry will spend the summer with the Dursleys per Dumbledore’s wishes and return to Godric’s Hollow, where his Wizarding life started. Harry also wishes to visit the graves of his parents. After that, Harry will begin his search for the remaining Horcruxes. Ron and Hermione tell Harry that they will accompany him to the Dursleys and will stay by his side from there on. Ron reminds them that they need to return to the Burrow for Bill and Fleur’s wedding. Knowing that the future holds a long and difficult journey, Harry enjoys one last moment of peace with his two best friends."

                		},


                		{
                			'name'  :  "Dark Lord Ascending",
                			'type'	:  'event',
                			'associatedPlace' :  "Malfoy Manor",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_1.m4v',
                			'duration' : '25',
                			'lat'   :  '51.349300',
                			'lon'   :  '-1.992710',
                			'abt'   :  "Snape and the Death Eater Yaxley meet outside of Lucius Malfoy’s house and proceed inside, taking seats at a table where Voldemort and his followers are already assembled. A bound figure dangles upside down above the center of the table, hanging by a rope.Snape tells Voldemort that Harry Potter is to be moved from his place of safety on the next Saturday at nightfall. Yaxley claims that he has heard contradictory intelligence, and that Harry is to be moved later, on the thirtieth of the month. Voldemort indicates that he knows the source of Snape’s intelligence, and he makes it plain that he believes Snape rather than Yaxley.A loud wailing, seemingly arising from below the floor, interrupts the gathering. Voldemort sends Wormtail out of the room to quiet “the prisoner”Voldemort makes Lucius Malfoy lend him his wand. Voldemort taunts Lucius and the rest of the Malfoy family, accusing them of being uncomfortable with his presence. Bellatrix Lestrange, Narcissa Malfoy’s sister, declares that his presence is the greatest possible pleasure, but Voldemort taunts all of them about the fact that Narcissa and Bellatrix’s niece (Nymphadora Tonks) has just married Remus Lupin, the werewolf.Finally, Voldemort turns the room’s attention to the bound prisoner above the table, revealing it to be Charity Burbage, a Hogwarts professor who taught Muggle Studies and promoted the view that Muggles are not so different from Wizards, and that the increasing prevalence of Mudbloods is a good thing. Charity Burbage appeals to Snape, who does nothing to help her, and Voldemort kills her with the Killing Curse."

                		},

                		{
                			'name'  :  "The Seven Potters",
                			'type'	:  'event',
                			'associatedPlace' :  "Privet Drive",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_2.m4v',
                			'duration' : '53',
                			'lat'   :  '51.227865',
                			'lon'   :  '0.176811',
                			'abt'   :  "Harry looks around at the house, remembering sadly his younger self and the life he led in that place. Suddenly, an unexpectedly large contingent of wizards arrives in the backyard to escort Harry to his new place of safety. Hagrid is there, as well as Ron, Hermione, Fleur Delacour, Mad-Eye Moody, Fred and George Weasley, Bill Weasley, Arthur Weasley, Remus Lupin, Tonks, Kingsley, and Mundungus Fletcher. Moody announces that they’ve had to change plans because Pius Thicknesse has gone over to Voldemort and all Ministry-regulated means of transportation are dangerous to them.Moody’s new plan is to send Harry to Tonks’s parents’ house while six decoys go to other houses. Ron, Hermione, Fred, George, Fleur, and Mundungus will take Polyjuice Potion to disguise themselves as Harry, and each of them will fly with one escort. Harry protests at putting his friends in danger by using them as decoys, but since everyone accepts the risk, he reluctantly agrees. Harry provides hairs for the potion, which the six designated decoys take, changing them into copies of Harry. Harry gets into the sidecar of a flying motorbike driven by Hagrid, and the entire party rises into the air.Almost immediately, Harry and Hagrid find themselves surrounded by at least thirty hooded Death Eaters. They flee, with the Death Eaters in hot pursuit, shooting Killing Curses at them, one of which kills Harry’s owl, Hedwig. Harry tries to fend their pursuers off with spells, but when Hagrid shoots dragon fire out of the back of the motorbike, the sidecar splits off. Harry recognizes Stan Shunpike as one of the pursuers, and a Death Eater whom he does not recognize somehow identifies Harry as the real Harry Potter. The Death Eaters immediately depart, but quickly return with Voldemort himself, who is intent on killing Harry personally. Hagrid leaps onto a Death Eater’s broom and crashes to the ground. Threatened by Voldemort at close range, Harry feels his wand hand come up involuntarily and deliver a warding spell he doesn’t even recognize or know how to cast, shattering Voldemort’s wand, then Harry crashes the bike into a pond."

                		},


                		{
                			'name'  :  "The Will of Albus Dumbledore and the Wedding",
                			'type'	:  'event',
                			'associatedPlace' :  "The Burrow",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_3.m4v',
                			'duration' : '49',
                			'lat'   :  '50.703799',
                			'lon'   :  '-3.328857',
                			'abt'   :  "Harry’s birthday dinner is interrupted by the arrival of Rufus Scrimgeour, the Minister of Magic, who insists on speaking to Harry, Ron, and Hermione in private. Scrimgeour has brought each of them a bequest from Dumbledore’s will. Dumbledore has left Ron a device called a Deluminator, a device that can suck all the light out of a room or turn the light on again. He left Hermione a copy of The Tales of Beedle the Bard, a collection of fairy tales familiar to virtually everyone raised by wizards. To Harry, Dumbledore bequeathed the first Snitch he ever caught, saved from his first Quidditch match. Dumbledore’s will also bequeathed to Harry the sword of Godric Gryffindor, but Scrimgeour maintains that the sword was not Dumbledore’s to give. (Presumably he’s about to say it belongs at Hogwarts in the headmaster’s study, where in fact it is; they interrupt Scrimgeour before he can finish.)As Hermione forces Scrimgeour to admit, he has kept these items for the full thirty-one days allowed by law for the Ministry to study and test willed items for Dark magic or curses. Having failed to find out anything about the items, he questions the three friends closely about why Dumbledore might have left these seemingly frivolous, even inappropriate, bequests. Harry, Ron, and Hermione put Scrimgeour off with flippant and unhelpful responses, but in truth they are as mystified about the bequests as Scrimgeour. Scrimgeour guesses that there is something inside the Snitch, and that it will open only at Harry’s touch, and he watches closely as Harry takes it in his hand. The Snitch does not open, and Scrimgeour departs, frustrated.The wedding celebration is cut short by the appearance of Kingsley Shacklebolt’s Patronus, a silver lynx. (A Patronus, as we learn in Harry Potter and the Prisoner of Azkaban, is a charm that witches and wizards use to send out an animal-shaped manifestation of themselves. It can be used to send messages, and is also one of the only things that can ward off a dementor.) The lynx tells the guests that Scrimgeour is dead, the Ministry has fallen, and the Death Eaters are coming."

                		},


                		{
                			'name'  :  "Umbridge’s locket",
                			'type'	:  'event',
                			'associatedPlace' :  "The Ministry of Magic",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_4.m4v',
                			'duration' : '54',
                			'lat'   :  '51.504647',
                			'lon'   :  '-0.126852',
                			'abt'   :  "The next day, the three friends break into the Ministry of Magic by bringing Polyjuice Potion with them, waylaying employees before they enter the building, incapacitating them, taking hair samples, then using the potion mixed with the hair samples to impersonate the employees. Hermione assumes the identity of Mafalda Hopkirk, an assistant, whom they stun. Ron steals the identity of a man named Cattermole, a lowly support services employee who for some reason wants very much to go to work that day, even after Hermione makes him vomit uncontrollably by giving him an enchanted pastille to eat. Harry becomes a wizard named Runcorn, a senior member of the Ministry whom the Death Eaters at the Ministry respect and most normal people seem to fear.Once inside, Harry removes Moody’s eye and puts it in his pocket. As he searches the office, he comes upon Arthur Weasley’s file and notes that Weasley is being watched. He sees his own photograph on a poster above the words “Undesirable Number One,” on which Umbridge has written “to punish.” He sees a copy of the new Rita Skeeter book about Dumbledore. The locket is nowhere to be found.Harry proceeds to the room where Umbridge is conducting her hearings of suspected Mudbloods. Dementors guard the suspects. Hermione is there taking notes, as well as Yaxley, and Umbridge is just beginning to interview Mary Cattermole, whom she accuses of having obtained her wand by theft. Mary Cattermole tries to flatter Umbridge by complimenting a locket that Umbridge is wearing, which Harry recognizes as the Horcrux. Umbridge makes up a lie about the letters on the locket standing for members of her pureblood ancestry. Harry, enraged, casts spells to Stun Umbridge and Yaxley, then Hermione takes the locket, replaces it magically with a decoy, and the two lead Mary Cattermole and the other prisoners toward safety. They meet up with Ron and, urging the prisoners to escape and go into hiding, they join hands and Disapparate together."

                		},


                		{
                			'name'  :  "Bathilda's Secret",
                			'type'	:  'event',
                			'associatedPlace' :  "Godric's Hollow",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_5.m4v',
                			'duration' : '47',
                			'lat'   :  '51.022678',
                			'lon'   :  '-3.801370',
                			'abt'   :  "Harry tells Hermione that he wants to go to Godric’s Hollow, and to his surprise—since she had previously said it was a waste of time—she agrees, having made up her mind that Godric’s Hollow is the most likely location of Gryffindor’s sword, since it was Godric Gryffindor’s birthplace. Harry reminds her that according to Aunt Muriel, Bathilda Bagshot still lives in Godric’s Hollow, and Hermione imagines that Dumbledore might have entrusted the sword to her.Finally, they find it—the grave of Lily and James Potter, bearing the inscription “The last enemy that shall be destroyed is death.” Just as Harry realizes that he has brought nothing to leave at his parents’ grave, Hermione conjures a wreath for him to lay. Then they head out of the graveyard and back toward the town.Harry asks Bathilda who the young man in the picture is, but she does not respond, instead beckoning Harry to accompany her upstairs while Hermione remains below. In the foul-smelling room upstairs, Harry asks Bathilda if she has something for him, hoping she will give him the sword of Gryffindor, but instead he experiences yet another vision through Voldemort’s mind, with Voldemort telling someone to “hold him there” and then flying through the night sky. Back in the room, Harry is horrified to see Voldemort’s snake, Nagini, emerge from within Bathilda’s dead body to attack him. Apparently Bathilda had been dead long before, and the snake was somehow animating her body. Hermione rushes into the room, and Harry and Hermione struggle against the snake both physically and with magic. Hermione manages to fend it off with a violent blasting curse, then Disapparates with Harry in tow.At the moment they disappear, Harry sees through Voldemort’s eyes as Voldemort arrives on the scene and sees Harry and Hermione (in their disguised form) disappearing and escaping. Harry can feel Voldemort’s rage and frustration, and then he has a flashback, still from Voldemort’s perspective, of the night Voldemort killed Harry’s parents and tried to murder Harry. In the flashback, Voldemort stalks through Godric’s Hollow on Halloween night, frightening a child. He approaches the Potters’ house and sees the Potters through the window. Neither James nor Lily Potter is holding a wand, and the defenseless James goes down quickly before Voldemort’s Killing Curse. Voldemort expects Lily to stand aside while he kills Harry, but she does not, trying to shield Harry with her body and begging to be killed in his place. Voldemort kills her, then aims his wand carefully at Harry’s face. When he delivers the curse, instead of killing Harry, he feels himself ripped from his body, his own self now consisting of nothing but pain and terror."

                		},

                		{
                			'name'  :  "The Silver Doe",
                			'type'	:  'event',
                			'associatedPlace' :  "The Forest of Dean",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_6.m4v',
                			'duration' : '52',
                			'lat'   :  '51.655413',
                			'lon'   :  '0.144196',
                			'abt'   :  "One cold night, when Harry and Hermione are camped in a snow-covered forest with Harry keeping watch, a silver doe, glimmering like moonlight, appears noiselessly before Harry and walks slowly away. Harry follows it, overcome by an instinct that tells him this is not Dark magic or a trap. After leading him into the forest, the doe disappears, and Harry finds that he’s now standing near a frozen pool. On shining a light from his wand at the pool, he sees that the Sword of Gryffindor lies at the bottom, under the ice.Harry recalls that only true Gryffindors can retrieve the sword, and that Gryffindors are defined by daring, nerve, and chivalry. Accordingly, he strips off his clothes, breaks the ice, and plunges into the cold water. As soon as he is underwater, the Horcrux around his neck begins to choke him, and he blacks out. He wakes up beside the pool, having been pulled out by Ron Weasley, who has retrieved the sword from the pool and cut the Horcrux off of Harry’s neck. Ron tells Harry that he wants to return to the quest—if Harry will have him.Harry tells Ron that as the retriever of the sword, Ron must be the one to use it to destroy the locket Horcrux. Harry has a sudden flash of insight that the way to open the locket must be to tell it to open in Parseltongue, the language of snakes, which Harry knows how to speak. Harry warns Ron to stab the locket quickly, before it can try to kill him, then he opens the locket.The locket speaks to Ron, playing on his deepest fears, telling him that he’s the least loved of his mother’s children, that he will always be overshadowed by Harry, and that Hermione prefers Harry over him. Two bubbles rise up from the locket, looking like the heads of Harry and Hermione, and they taunt Ron, telling him how they laughed at his stupidity, cowardice, and most of all his presumption in thinking he could attract Hermione while Harry was in the picture. The two heads meet and kiss each other.Ron brings the sword down and destroys the locket. Harry, having seen Ron’s fears manifested plainly, assures Ron that there’s nothing between Harry and Hermione. Ron apologizes for leaving, and they embrace."

                		},


                		{
                			'name'  :  "Xenophilius Lovegood",
                			'type'	:  'event',
                			'associatedPlace' :  "Lovegood House",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_7.m4v',
                			'duration' : '66',
                			'lat'   :  '50.750430',
                			'lon'   :  '-3.278745',
                			'abt'   :  "Hermione announces that she wants to visit Xenophilius Lovegood, having found, in the signature of the letter from Dumbledore excerpted in Skeeter’s book, yet another appearance of the triangular symbol associated with Grindelwald and worn by Xenophilius.Harry, Ron, and Hermione are all baffled—none of them have heard of the Deathly Hallows. Xenophilius explains that the Deathly Hallows have nothing to do with Dark Magic, and that the symbol is merely a way for wizards to indicate to each other that they believe in a particular legend and are engaged in a quest for certain objects—the Deathly Hallows. To explain what these objects are, Xenophilius has Hermione read an old and familiar fairy tale from The Tales of Beedle the Bard.Harry is startled to realize that the photographs are dusty and the room clearly has not been inhabited for months. He confronts Xenophilius with his lie, and Xenophilius admits that the Ministry has kidnapped Luna because of the pro-Potter articles Xenophilius had been printing. When Xenophilius had gone outside earlier, he had actually dispatched an owl to the Ministry.Death Eaters arrive, and Xenophilius attempts to subdue Harry and his friends with a spell, but the spell hits an explosive Erumpent horn hanging on his wall, which detonates and blows up half the tower, leaving the trio upstairs and Xenophilius below, separated by rubble. The Death Eaters beat Xenophilius and berate him for constantly summoning them on false pretexts, but one of them uses a spell to determine that someone is indeed upstairs. Ron, Harry, and Hermione Disapparate, but not before Hermione hits Xenophilius with a Forgetting spell to erase his memory and allows the Death Eaters to catch a glimpse of Harry, so they’ll know Xenophilius wasn’t lying."

                		},

                		{
                			'name'  :  "Goodbye Dobby",
                			'type'	:  'event',
                			'associatedPlace' :  "Malfoy Manor",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_8.m4v',
                			'duration' : '56',
                			'lat'   :  '51.349600',
                			'lon'   :  '-1.992710',
                			'abt'   :  "Hermione points her wand at Harry’s face and causes it to swell so that he’s unrecognizable, just before the three friends are seized by a gang of Snatchers. Harry can’t see, but he recognizes one of the voices menacing Hermione as belonging to Fenrir Greyback, the werewolf. Questioned about their names, Harry claims to be Vernon Dudley, Ron to be Barny Weasley (after having been caught in the lie that he was Stan Shunpike), and Hermione to be Penelope Clearwater.The Snatchers decide to take the prisoners to Malfoy Manor, Voldemort’s base of operations, and as they go there, Harry has visions of Voldemort interrogating Grindelwald in his cell at Nurmengard.here is a loud crack, and they relight the Deluminator to discover that Dobby the house-elf, who served the Malfoys until Harry tricked Lucius into freeing Dobby, has appeared in their midst, ready to rescue them. Dobby, with his special house-elf magic, can Disapparate in and out of the house, taking humans with him, so Harry tells him to take Luna, Ollivander, and Dean to Bill Weasley’s house, and then return for the rest of them.Harry, Ron, Griphook, and Dobby all Disapparate to Bill Weasley’s cottage, but Dobby arrives mortally wounded, Bellatrix having thrown her silver knife into his body before he disappeared. Harry tries to comfort Dobby and pleads with him not to die, but the house-elf dies in Harry’s arms after saying Harry’s name."

                		},


                		{
                			'name'  :  "Bellatrix Lestrange's Vault for Horcrux",
                			'type'	:  'event',
                			'associatedPlace' :  "Gringotts Wizarding Bank",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_9.m4v',
                			'duration' : '73',
                			'lat'   :  '51.514387',
                			'lon'   :  '-0.128403',
                			'abt'   :  "Griphook agrees to help them break into Bellatrix Lestrange’s Gringotts vault, but he demands the Sword of Gryffindor as payment. This puts Harry and his friends in a bin.To break into Gringotts, Hermione disguises herself as Bellatrix Lestrange and changes Ron’s appearance so he’s unrecognizable. With Harry and Griphook under the Invisibility Cloak, the four go to Diagon Alley, where they see witches and wizards begging in the streets, deprived of their wands by the Ministry.When the cart passes through a waterfall and all of their Disguising spells are undone, Griphook tells them that the Gringotts employees have set up defenses indicating that they know impostors are present.A dragon blocks the passageway to the vault, but Griphook shakes metal instruments called Clankers, which the dragon has been trained to fear, and it backs up. The mind-controlled goblin places his palm to the door of the vault, and it opens.Finally, they see the cup sitting high up out of reach. The dragon roars outside the door, and the heat from the multiplied treasure is overwhelming. Hermione Levitates Harry toward the cup, but he knocks over a suit of armor, and they begin to be buried in hot objects. Harry uses the sword to skewer the cup through a handle as Griphook sinks beneath the burning treasure. Harry uses his wand to free the chained dragon, then the three get on the dragon’s back and ride it through the tunnel, eventually emerging in the bank lobby, exiting through the door, and flying off into the sky above Diagon Alley."

                		},


                		{
                			'name'  :  "The Missing Mirror",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogsmeade Village",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_10.m4v',
                			'duration' : '80',
                			'lat'   :  '56.593937',
                			'lon'   :  '-4.214750',
                			'abt'   :  "Harry, Ron, and Hermione appear in Hogsmeade, but their appearance triggers a magical alarm that sounds like loud screaming. Harry recognizes the man’s blue eyes as those he’s been seeing through the magic mirror, and he realizes that this man must be Aberforth, Dumbledore’s brother, and that Aberforth was the one who sent Dobby. Aberforth acknowledges that he’s been trying to keep an eye on Harry, though it was not he who led them to the sword.Aberforth turns to an oil painting of Ariana on the wall and tells the picture of Ariana that she knows what to do. Ariana turns around within the picture and walks down a tunnel, growing smaller and smaller until she disappears, eventually returning through the picture with a bedraggled and scarred Neville Longbottom, who emerges from the painting into the room.Neville leads Harry and company through the portrait into the Room of Requirement. About twenty students are hiding in it, all members of Dumbledore’s Army and supporters of Harry who’ve been driven into hiding. They are wild with joy at seeing Harry and his friends. Soon after, Luna Lovegood and Dean arrive. All of the students are eager to help Harry, and are unhappy and resentful to hear that Harry, Ron, and Hermione are on a mission alone that they won’t disclose or accept help with. With some prodding from Ron and Hermione, Harry realizes that he doesn’t have to be quite as cryptic as Dumbledore and can recruit help in searching for the Horcrux without explaining what it is."

                		},  

                		{
                			'name'  :  "The Lost Diadem and Basilisk Teeth",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_11.m4v',
                			'duration' : '72',
                			'lat'   :  '56.599469',
                			'lon'   :  '-4.218368',  
                			'abt'   :  "Remembering that the diadem has not been seen “in living memory,” he decides to ask the dead—the Gray Lady, who is the House ghost of Ravenclaw. Harry finds the Gray Lady, who refuses to help him until he confronts her with the threat to Hogwarts. Then she admits that she is the ghost of Helena Ravenclaw, the daughter of the founder. Helena had stolen the diadem, hoping to make herself smarter and more important than her mother. She fled to hide in a forest in Albania, and her mother, Rowena, concealed the theft. On her deathbed, Rowena wanted to see her daughter one last time, so she sent a man who loved Helena to seek her out. Helena refused to come, and the young man killed her in anger, then killed himself. The young man became the Hogwarts ghost known as the Bloody Baron, while the diadem was left in the forest.Pressed by Harry, the Gray Lady admits that she told her story to Tom Riddle (Voldemort’s name when he was a student at Hogwarts). Harry guesses that Tom Riddle went and found the diadem in the forest, but when he made it a Horcrux, re-hid it at Hogwarts. (Harry knows from his vision that it’s at Hogwarts now.) He reasons that Voldemort’s only chance to hide it after he graduated from Hogwarts would have been the day he came to ask Dumbledore for a job, on the way to or from Dumbledore’s office.Harry encounters Ron and Hermione, who have gone to the Chamber of Secrets to retrieve basilisk teeth to destroy Horcruxes with. Ron was able to imitate Harry speaking Parseltongue to gain entry to the room, and they destroyed the cup. Harry, Ron, and Hermione go to the Room of Requirement, taking stock of the ever-worsening battle swirling around them. In the room, amid the labyrinth of hidden objects, Harry finds the diadem but is confronted by Draco Malfoy and his cronies, Crabbe, and Goyle, who followed Harry in to capture him, hoping to hand him over to Voldemort.Crabbe and Goyle try to kill Harry rather than capture him, for once ignoring Draco’s leadership, and in the struggle the diadem is dropped. Crabbe uses a fire curse to try to kill Harry and his friends, and it rages out of control. Harry and Ron seize broomsticks and save Hermione, Goyle, Malfoy, and the diadem, but Crabbe dies. Outside the Room of Requirement, they see that the diadem Horcrux has been destroyed by the fire curse."

                		},  


                		{
                			'name'  :  "The Truth",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_12.m4v',
                			'duration' : '93',
                			'lat'   :  '56.599469',
                			'lon'   :  '-4.215968',  
                			'abt'   :  "Harry, Ron, and Hermione enter the passage and creep to where they can observe what’s happening in the Shrieking Shack. Voldemort is telling Snape that the Elder Wand is working no better than his old wand and has not given him the extraordinary powers it was supposed to. Voldemort concludes that he is not yet the true master of the Elder Wand, because Snape killed its previous owner, and thus Voldemort must kill Snape to be the wand’s master. Voldemort orders Nagini to kill Snape, and the great snake bites Snape’s neck, mortally wounding him. Voldemort leaves.Harry goes to Snape’s body, and Snape, dying, tells Harry to “Take it,” and expels a silvery substance from his mouth, nose, and ears. Harry collects the substance in a flask that Hermione provides, and Snape, after telling Harry to look at him, dies.Harry observes a scene in which Snape watches Lily say good-bye to her family to board the Hogwarts Express for the first time. Lily reveals to Petunia that she knows that Petunia, who professes to hate magic, begged Dumbledore to admit her to the school.Later, Dumbledore tells Snape that after Snape kills Dumbledore, there may come a time when Voldemort seems to fear for the life of his snake (which will mean that the other Horcruxes are destroyed or threatened). At that moment, Snape should tell Harry the truth: that when Voldemort sent his killing curse at Lily Potter and blasted his own soul to bits, a piece of Voldemort’s soul bound itself to Harry’s. This event is the reason that Harry can read Voldemort’s mind and can speak Parseltongue. As long as Harry lives, so will Voldemort. The only way Voldemort will die is if all of the Horcruxes are destroyed and Voldemort himself kills Harry, who is in fact the seventh Horcrux. Snape is furious, accusing Dumbledore of raising Harry as a lamb for slaughter and using Snape by falsely telling him he was protecting Lily Potter’s son."

                		},   


                		{
                			'name'  :  "Harry Potter is Dead and KingsCross",
                			'type'	:  'event',
                			'associatedPlace' :  "The Forbidden Forest",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_13.m4v',
                			'duration' : '44',
                			'lat'   :  '56.594437',
                			'lon'   :  '-4.219450', 
                			'abt'   :  "Harry enters the forest. He takes out the Snitch Dumbledore left him, whose message said “I open at the close.” He tells the Snitch he is about to die, and it opens for him, revealing the cracked Resurrection Stone. Behind him, the shades of his parents appear, as well as Sirius and Lupin, who was killed in the recent battle. The shades tell him they are proud of him and that it doesn’t hurt to die, and they promise to stay with him in his ordeal, invisible to all but him.Harry goes farther into the forest. He sees dementors, but they are powerless to affect him, as the shades of his loved ones act like Patronuses. In a clearing in the forest, Voldemort stands, surrounded by followers. The hour is up. Voldemort says he thought Harry would come but must have been mistaken. Harry says loudly that he wasn’t, as he steps out of the Cloak and drops the stone, causing the shades to vanish. He keeps his wand put away.Everyone waits for Voldemort to act. Hagrid, taken prisoner and tied, shouts at Harry but is silenced. Harry thinks of Ginny’s face and her kiss. Voldemort casts the Killing Curse, and everything vanishes for Harry.Harry gradually comes into consciousness, naked. He opens his eyes and finds himself in an unformed, dreamlike place. He hears something pitiful yet unseemly flapping and thumping. He wishes for clothes, and robes appear before him, which he puts on. He sees that he is in a great hall. He sees a small, naked child, looking like it’s been beaten and stuffed out of sight, struggling for breath. He wants to help it but is repulsed by it. Dumbledore’s voice tells Harry that he cannot help it.Dumbledore leads Harry to a couple of seats and commends him for his bravery. He acknowledges that he is dead, but says that Harry is probably not. He explains, or helps Harry to figure out, that while Voldemort has just killed the part of his own soul that was embedded within Harry, Harry is still alive because Voldemort reconstituted his own body out of Harry’s blood (in Harry Potter and the Goblet of Fire). Because Voldemort contains Harry’s blood, as long as Voldemort is alive he preserves Lily Potter’s charm, so Harry can’t die at his hand."

                		},    


                		{
                			'name'  :  "Nagini is dead and The Final Battle",
                			'type'	:  'event',
                			'associatedPlace' :  "Hogwarts School of Witchcraft and Wizardry",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_14.m4v',
                			'duration' : '73',
                			'lat'   :  '56.594469',
                			'lon'   :  '-4.215868', 
                			'abt'   :  "Voldemort’s followers celebrate, and Voldemort casts a Cruciatus Curse on Harry, lifting him in the air and toying with his body, though Harry does not feel the pain from the curse as he should. Voldemort orders Hagrid to carry Harry to Hogwarts with them.At Hogwarts, Voldemort announces that Harry was killed while running away, and orders everyone inside to kneel before him or die. The crowds resist, somehow shaking off the silencing curse Voldemort throws at them, and McGonagall, Ron, and Hermione all shout defiantly at Voldemort.Neville Longbottom comes forward to confront Voldemort, who tries to win Neville over with promises of a senior position as a Death Eater. Neville rejects Voldemort.Voldemort summons the Sorting Hat, saying that it won’t be needed anymore and that all of Hogwarts will be in Slytherin. He puts the hat on Neville and lights him on fire.Neville pulls the Gryffindor Sword out of the hat and kills Nagini, as all of Harry’s supporters and all of Voldemort’s erupt in a fresh battle.Harry slips on his Cloak in the confusion and sends curses at the Death Eaters. Voldemort holds McGonagall, Kingsley, and Slughorn at bay, while Bellatrix faces off against Hermione, Ginny, and Luna. Mrs. Weasley steps in, duels Bellatrix by herself, and kills her, infuriating Voldemort. Harry casts a Shield charm to protect Mrs. Weasley from Voldemort, then takes off his cloak, revealing himself to be alive for the first time.Voldemort fires his Killing Curse, and Harry simultaneously sends a Disarming Curse, and the two curses meet in the middle, with Voldemort’s rebounding and killing him and the Wand coming to Harry’s hand."

                		}, 


                		{
                			'name'  :  "Nineteen Years Later",
                			'type'	:  'event',
                			'associatedPlace' :  "Platform Nine and Three Quarters",
                			'icon'  :  '../../images/hallows.png',
                			'url'   :  '../../videos/7_15.m4v',
                			'duration' : '72',
                			'lat'   :  '52.303147',
                			'lon'   :  '-0.676908',
                			'abt'   :  "Nineteen years later, Harry stands at the train station, waiting to send his younger son to Hogwarts for his first year. Harry is married to Ginny, and they have three children: James, who attends Hogwarts already; Albus Severus, who is just starting; and Lily, who is still two years away from going. James is taunting Albus that he might be selected for Slytherin House.The Potter family meets Ron and Hermione, who are married and who have two children. Rose, the elder, is starting her first year at Hogwarts, and Hugo is younger.Draco is on the platform as well, with his own wife and son, Scorpius. Draco nods curtly to Harry and looks away.James reports that Lupin and Tonks’s son, Teddy Lupin, is kissing their cousin Victoire, the daughter of Bill and Fleur Weasley.Ginny tells James to send Neville Longbottom, now the Hogwarts Professor of Herbology, her love.Harry offers some final words of comfort to Albus Severus, noting that one of the headmasters he was named for, Severus Snape, was a Slytherin and was the bravest man Harry ever knew.The train departs. Harry gives a final wave, confers with Ginny, then touches his scar. It has not hurt for nineteen years, and all is well."
                		}

                ];

    return myResponse;

};