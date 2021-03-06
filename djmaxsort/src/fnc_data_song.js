// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2014/6/29 Modified by nkeronkow
// 2018/11/26 Added to relick's github, changes tracked there
// 2021/03/26 Adapted to DJMAX Respect songs by shockdude
// github.com/shockdude/djmax-song-sorter

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = '';
str_YouPath = 'https://www.youtube.com/embed/';
str_YouLink = 'https://www.youtube.com/watch?v=';

// Up to which position should images be shown for?
var int_ResultRank = 3;

// Maximum number of result rows before being broken off into another table.
var maxRows = 42;

// * Game and album titles
var ary_TitleData = [
	  "Respect"
	, "Portable 1"
	, "Portable 2"
	, "Trilogy"
	, "Clazziquai Edition"
	, "Black Square"
	, "Technika 1"
	, "Technika 2"
	, "Technika 3"
	, "Emotional Sense"
	, "V Extension"
	, "Dok2 - ONLY ON"
	, "Guilty Gear"
	, "Girls' Frontline"
	, "Groove Coaster"
	, "Deemo"
	, "Cytus"
	, "Chunithm"
	, "Portable 3"
	, "ESTIMATE"
];

// link disc helpers, indexes based on ary_TitleData
var LINK_CE = 4
var LINK_BS = 5
var LINK_T1 = 6

// Number of columns in the selection list.
var int_Colspan = 3;

// * Music information
// [Index: Meaning]
// 0: unused
// 1: Track name
const TRACK_NAME = 1;
// 2: Array that maps to ary_TitleData, 0 = track not in title, 1 = track in title.
const TRACK_TITLES = 2;
// 3: Image filename
const TRACK_IMAGE = 3;
// 4: Youtube video ID
const TRACK_YOUTUBE_ID = 4;
// 5: Title (game/album) name
const TRACK_TITLE_NAME = 5;
// 6: Title (game/album) abbreviation
const TRACK_TITLE_ABBREV = 6;
// 7: Track Artist
const TRACK_ARTIST = 7;
// 8: Track type - regular song, V exclusive, link disc
const TRACK_TYPE = 8;
	const REGULAR_SONG = 1;
	const V_EXCLUSIVE = 2;
	const LINK_DISC = 3;
// 9: Extended Mix type - short, extended
const EXTENDED_TYPE = 9;
	const SHORT_MIX = 1;
	const EXTENDED_MIX = 2;

var ary_SongData = [
	//Respect
	[1, "2Nite",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "xuBQ7dGdj_s", "Respect", "DMR", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Always",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "bM8VK_xb0xw", "Respect", "DMR", "YUGI / Mool", REGULAR_SONG, SHORT_MIX],
	[1, "Armored Phantom",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "l1DB8GITfWg", "Respect", "DMR", "ned", REGULAR_SONG, SHORT_MIX],
	[1, "Beautiful Day",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "14B7fXJMlBQ", "Respect", "DMR", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Beyond Yourself",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "31XJhQAn6EA",  "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "Binary World",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "SwHSQKSb6Nw", "Respect", "DMR", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "BlackCat",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "1LBOx8-6nB0", "Respect", "DMR", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Bleed",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "0PwnlLO-PPM", "Respect", "DMR", "Axol & The Tech Thieves", REGULAR_SONG, SHORT_MIX],
	[1, "Boom!",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "QSFeCkvJMJg", "Respect", "DMR", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Bullet, Wanted!",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "3q8B6P7Q18I", "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "Child of Night",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "5JkxGBrmwR8", "Respect", "DMR", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "Dance of the Dead",						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "WSWmV1ptWxk", "Respect", "DMR", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "Don't Die",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "FJiWn8TMP08", "Respect", "DMR", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Enter The Universe",						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "E67dLnOoQ7g", "Respect", "DMR", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "Far East Princess",						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "fII19ZT5ipw", "Respect", "DMR", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "Fly Away",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "ZShvs84OmvA", "Respect", "DMR", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "glory day",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "pCLyI9YNRbc", "Respect", "DMR", "BEXTER / Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "Grid System",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "L0228qWCZ6g", "Respect", "DMR", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Groovin Up",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "DpE27CYYf3E", "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "Heavenly",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "_BtklcKl1hA", "Respect", "DMR", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "I Want You ~Twinkle Twinkle Sunshine~",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "MJNeTD4YqrI", "Respect", "DMR", "Studio LAY-BACK", REGULAR_SONG, SHORT_MIX],
	[1, "Karma",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "30OUrSI4PQk", "Respect", "DMR", "ampstyle", REGULAR_SONG, SHORT_MIX],
	[1, "Kingdom",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "6YLpU_guMGM", "Respect", "DMR", "Phantom Sage", REGULAR_SONG, SHORT_MIX],
	[1, "KILLER BEE",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "16IDq4kESUQ", "Respect", "DMR", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "Kung Brother",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "jBvtHoAllmg", "Respect", "DMR", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Liar",										[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "u2g3sWqfibg", "Respect", "DMR", "zts", REGULAR_SONG, SHORT_MIX],
	[1, "Lift You Up",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "XIO6foaJ6j4", "Respect", "DMR", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Mulch",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "-9AUeXLECyg", "Respect", "DMR", "Sampling Masters MEGA", REGULAR_SONG, SHORT_MIX],
	[1, "NB RANGER - Virgin Force",					[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "zgtT288z8nk", "Respect", "DMR", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "NEON 1989 (ESTi Remix)",					[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "uIzSFgcdQLA", "Respect", "DMR", "OREO, ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Only for you",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "TbdZiu3Rarw", "Respect", "DMR", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "OPEN FIRE",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "yAntSnPUh3s", "Respect", "DMR", "JC", REGULAR_SONG, SHORT_MIX],
	[1, "Over Your Dream",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "bC-3781SgsU", "Respect", "DMR", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "quixotic",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "n_Fd3OKTysE", "Respect", "DMR", "bermei.inazawa", REGULAR_SONG, SHORT_MIX],
	[1, "Remains Of Doom",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "oBC1t4TT89k", "Respect", "DMR", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Royal Clown",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "GpV5kOWJ3VQ", "Respect", "DMR", "bermei.inazawa", REGULAR_SONG, SHORT_MIX],
	[1, "Runaway",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "LvNfA98M7HM", "Respect", "DMR", "LeeZu", REGULAR_SONG, SHORT_MIX],
	[1, "Running girl",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "MZxJkkCxZ9U", "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "Ruti'n (GOTH Wild Electro Remix)",			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "aR3VPCxUZzU", "Respect", "DMR", "BEXTER / GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "Secret Dejavu",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "Q9TC9OQC0hs", "Respect", "DMR", "DINY", REGULAR_SONG, SHORT_MIX],
	[1, "So Happy",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "TK1U0RLX8Gg", "Respect", "DMR", "Raven & Kreyn", REGULAR_SONG, SHORT_MIX],
	[1, "Shadow Flower",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "QsaXBd9540A", "Respect", "DMR", "ned", REGULAR_SONG, SHORT_MIX],
	[1, "Soar ~Stay With Me~",						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "SevQdt7mLKI", "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "The Feelings",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "huCM0zSUmoE", "Respect", "DMR", "Supbaby", REGULAR_SONG, SHORT_MIX],
	[1, "The Lost Story",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "vlo4GDfY8_M", "Respect", "DMR", "Neowiz Bless Team", REGULAR_SONG, SHORT_MIX],
	[1, "The Obliterator",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "EhuVPbo01RI", "Respect", "DMR", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "Tok! Tok! Tok!",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "LoyDhqElODg", "Respect", "DMR", "STARTRACK", REGULAR_SONG, SHORT_MIX],
	[1, "U.A.D",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "URUhsRk49bI", "Respect", "DMR", "HAYAKO", REGULAR_SONG, SHORT_MIX],
	[1, "Void",										[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "9DdMyJpTEJY", "Respect", "DMR", "Kobayashi Tetsuya", REGULAR_SONG, SHORT_MIX],
	[1, "voldenuit",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "c7hHUzzOn20", "Respect", "DMR", "Cuve", REGULAR_SONG, SHORT_MIX],
	[1, "waiting for me",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "D14pZefLw9o", "Respect", "DMR", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Waiting for you",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "RvYqG_G4TGs", "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "We're All Gonna Die",						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "juflfGVFnI4", "Respect", "DMR", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "WHY",										[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "1f3GY4Osi7I", "Respect", "DMR", "Nauts", REGULAR_SONG, SHORT_MIX],

	// Tapsonic Update
	// image? https://i1.sndcdn.com/artworks-000006190833-2lyrrq-t500x500.jpg
	[1, "Chemical Slave",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "hUJIztKXEgA", "Respect", "DMR", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "comet",			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "pC-jATKyklA", "Respect", "DMR", "Mycin.T", REGULAR_SONG, SHORT_MIX],
	[1, "RockSTAR",			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "coTD0MaMlbQ", "Respect", "DMR", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Watch Your Step",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "49MxJ7MPq5Y", "Respect", "DMR", "XeoN", REGULAR_SONG, SHORT_MIX],

	// V Exclusives
	[1, "Alone",		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e02c3055e5c1073d11b1ae2e553", "ALZHF5UqnU4", "Respect V", "DMRV", "marshmello", V_EXCLUSIVE, SHORT_MIX],
	[1, "Get Jinxed",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e02e79c051bb5ccb3934b4ca42b", "0nlJuwO0GDs", "Respect V", "DMRV", "Riot Games", V_EXCLUSIVE, SHORT_MIX],
	[1, "Ghost Voices",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e020f6af3fdf46507b622a44471", "HPc8QMycGno", "Respect V", "DMRV", "Virtual Self", V_EXCLUSIVE, SHORT_MIX],
	[1, "POP/STARS",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e02d1241debb8543af8322a7d6a", "UOxkGD8qRB4", "Respect V", "DMRV", "Riot Games", V_EXCLUSIVE, SHORT_MIX],
	[1, "Sad Machine",	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e021f675e7b8bae408653346dd9", "dDmB28dA3n4", "Respect V", "DMRV", "Porter Robinson", V_EXCLUSIVE, SHORT_MIX],
	
	// Portable 1
	[1, "A.I",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "6-N2540l3ZI", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Ask to wind",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "3O6xcMWjtYM", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Ask to wind Live Mix",				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "QLzjSV-TBmc", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Astro Fight",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "nc83_WNzh7Q", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "BlythE",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "dxHKaYQLGh4", "Portable 1", "DMP1", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Bright Dream",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Zknxc0Vu6bc", "Portable 1", "DMP1", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Can We Talk",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "MpwaDlL7EMY", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Catch Me",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "XLuR_BSEFy0", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Chrono Breakers",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "ZG6sCpMGUpA", "Portable 1", "DMP1", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "CnP",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "_bTes9yW-NI", "Portable 1", "DMP1", "CrooFE", REGULAR_SONG, SHORT_MIX],
	[1, "Dreadnought",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "UbNXGbfzyRg", "Portable 1", "DMP1", "EarBreaker", REGULAR_SONG, SHORT_MIX],
	[1, "Elastic STAR",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "E9XngEQWmVI", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "End of the Moonlight",				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Xt7RnmON1hQ", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Enemy Storm",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "nWTcMWaXs9E", "Portable 1", "DMP1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Eternal Memory",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "D6c6uWDCoGA", "Portable 1", "DMP1", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Every Morning",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "GaLuc56wHi8", "Portable 1", "DMP1", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Extreme Z4",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "XpjLfOYZzTs", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Fear",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "cbpvPi8uzYY", "Portable 1", "DMP1", "Supbaby", REGULAR_SONG, SHORT_MIX],
	[1, "Fever GJ",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "nmzr1msnP1Y", "Portable 1", "DMP1", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "FTR",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "A1Gq9rCDFpI", "Portable 1", "DMP1", "Supbaby", REGULAR_SONG, SHORT_MIX],
	[1, "Funky Chups",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "zyQz9IYwhvg", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Futurism",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "-h996akPq94", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "HAMSIN",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "hM-i6rymY-4", "Portable 1", "DMP1", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "JBG",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "kbybNLDOa54", "Portable 1", "DMP1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Jupiter Driving",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "fVrTZQcJ0X8", "Portable 1", "DMP1", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "KUDA",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "dlD41j7k4P8", "Portable 1", "DMP1", "GonZo", REGULAR_SONG, SHORT_MIX],
	[1, "Lemonade",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Pavz3aeW6f4", "Portable 1", "DMP1", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Let's Go Baby",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "rHV0MqxKsvg", "Portable 1", "DMP1", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Light House",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "df4Ht86LLXw", "Portable 1", "DMP1", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Long Vacation",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "TinlV7V0-hk", "Portable 1", "DMP1", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Luv Flow",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "beSy9KsXpDw", "Portable 1", "DMP1", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "MASAI",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Z4EzMcX0iR8", "Portable 1", "DMP1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Memory of Beach",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "WQyMflllgcM", "Portable 1", "DMP1", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Minimal Life",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "DdEmEkajJlQ", "Portable 1", "DMP1", "EarBreaker", REGULAR_SONG, SHORT_MIX],
	[1, "NB RANGER",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "lDCzr69QALY", "Portable 1", "DMP1", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Never Say",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "ghLCHAHv-VY", "Portable 1", "DMP1", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Oblivion",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "R35SKGqAtSw", "Portable 1", "DMP1", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Oblivion ~Rockin' Night Style~",	[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "XoCTa8Y7m70", "Portable 1", "DMP1", "ESTi / NieN", REGULAR_SONG, SHORT_MIX],
	[1, "ON",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Hwki9hD2Aqc", "Portable 1", "DMP1", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "One the Love",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "XiTrMesOaA4", "Portable 1", "DMP1", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Outlaw",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "JPH_H2Su_0s", "Portable 1", "DMP1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Para-Q",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "D2y9blB5h00", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Piano Concerto No. 1",				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Rrpqaku-ucw", "Portable 1", "DMP1", "WavFactory", REGULAR_SONG, SHORT_MIX],
	[1, "Ray of Illuminati",				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "QndxxJUA_p0", "Portable 1", "DMP1", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "RED",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "kgfyv5Ttg5w", "Portable 1", "DMP1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Revenge",							[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "XopM46jREGk", "Portable 1", "DMP1", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Road of Death",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "XG_1iwH8Xzk", "Portable 1", "DMP1", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Rock or Die",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "JExIWugzLtg", "Portable 1", "DMP1", "NieN / M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Save My Dream",					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "Ucocsz2vuQE", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "SIN",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "umbdO4DjUnc", "Portable 1", "DMP1", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "SIN ~The Last Scene~",				[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "kuDU3WP_Guo", "Portable 1", "DMP1", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Sunny Side",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "TpYm2mm8BLc", "Portable 1", "DMP1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Sunny Side ~Deepn' Soul Mix~",		[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "csxLGwQaRYg", "Portable 1", "DMP1", "Croove / makou", REGULAR_SONG, SHORT_MIX],
	[1, "Temptation",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "9qtK26x7fMA", "Portable 1", "DMP1", "S-TRO / Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Triple Zoe",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "BXYJ1gr_iZg", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Ya! Party!",						[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable1_500.jpg", "klbmtP8wDnA", "Portable 1", "DMP1", "Forte Escape", REGULAR_SONG, SHORT_MIX],

	// Portable 2
	[1, "A Lie",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "zxe6gk_HXO8", "Portable 2", "DMP2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Another DAY",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "PZt2bOhoxX8", "Portable 2", "DMP2", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Brain Storm",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "GGi5sKXt7YM", "Portable 2", "DMP2", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Brandnew Days",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "YgwHoTHn7n4", "Portable 2", "DMP2", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Brave it out",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "X_nSev7jLEQ", "Portable 2", "DMP2", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Bye Bye Love",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "cGk4vMwlZq4", "Portable 2", "DMP2", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Chain of Gravity",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "ZQNLydOdcwY", "Portable 2", "DMP2", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Cherokee",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "-ht__LZJ2F0", "Portable 2", "DMP2", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "DIVINE SERVICE",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "D7eAytiBtlQ", "Portable 2", "DMP2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Dream Of You",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "u9LPb4dssIg", "Portable 2", "DMP2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Fallen Angel",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "uBMHp-0817c", "Portable 2", "DMP2", "DJ Mocha", REGULAR_SONG, SHORT_MIX],
	[1, "Fentanest",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "lSmoAQin9mo", "Portable 2", "DMP2", "EarBreaker / eszett", REGULAR_SONG, SHORT_MIX],
	[1, "For Seasons",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "qfCNlqUNVMQ", "Portable 2", "DMP2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "For the Ikarus",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "OMxURS4cm_A", "Portable 2", "DMP2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Get On Top",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "8TJBpugVXVo", "Portable 2", "DMP2", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Get Out",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "zim5U3Tcl5E", "Portable 2", "DMP2", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Good Bye",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "iLrgemEiBYE", "Portable 2", "DMP2", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "HeartBeat",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "rGNZUStVzLI", "Portable 2", "DMP2", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Hello Pinky",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "-nrmWQ71mzc", "Portable 2", "DMP2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Higher",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "Zh1KnUt2mOQ", "Portable 2", "DMP2", "Supbaby", REGULAR_SONG, SHORT_MIX],
	[1, "Ladymade Star",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "vPK1yRQOTG8", "Portable 2", "DMP2", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Lost n' found",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "jnXXraIyTHI", "Portable 2", "DMP2", "bermei.inazawa", REGULAR_SONG, SHORT_MIX],
	[1, "Memoirs",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "8Drk89nOfBs", "Portable 2", "DMP2", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Mess it up",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "GL-SVM1UlNI", "Portable 2", "DMP2", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "Midnight Blood",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "E732JulwFWw", "Portable 2", "DMP2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Miles",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "2aBQOcZyTNg", "Portable 2", "DMP2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 3",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "mGqZoKFg6yQ", "Portable 2", "DMP2", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "My Alias",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "V4XoY3zYp0Q", "Portable 2", "DMP2", "Dayz", REGULAR_SONG, SHORT_MIX],
	[1, "NANO RISK",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "q7Kt8mIk--E", "Portable 2", "DMP2", "Dayz", REGULAR_SONG, SHORT_MIX],
	[1, "NB POWER",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "wydmPmV4fr8", "Portable 2", "DMP2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "NB RANGERS -Returns-",	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "ENgFMBuVudo", "Portable 2", "DMP2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Negative Nature",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "aKc4Ash5q8c", "Portable 2", "DMP2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Nightmare",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "BnG3dqOjtFI", "Portable 2", "DMP2", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Phantom of Sky",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "WL_rSVhM9-s", "Portable 2", "DMP2", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "plastic method",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "579Hq74yR_c", "Portable 2", "DMP2", "zts", REGULAR_SONG, SHORT_MIX],
	[1, "Right Now",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "soq-bg6nLXQ", "Portable 2", "DMP2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Rock-a-doodle-doo",	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "TOXKW6eoERw", "Portable 2", "DMP2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Rolling On the Duck",	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "2zBEDsCpc6s", "Portable 2", "DMP2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Seeker",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "7lmR6AWtdHo", "Portable 2", "DMP2", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Showtime",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "kP6_7W7Teu8", "Portable 2", "DMP2", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Smoky Quartz",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "zj8NXwJYz8M", "Portable 2", "DMP2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "sO mUCH iN LUV",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "EaSItbu94mI", "Portable 2", "DMP2", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "SQUEEZE",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "JU9MZ-XjSZ0", "Portable 2", "DMP2", "Oriental ST8", REGULAR_SONG, SHORT_MIX],
	[1, "STALKER",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "CFoW6Znga0M", "Portable 2", "DMP2", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Starfish",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "ZX5iZK8Px-A", "Portable 2", "DMP2", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Stay with me",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "bOhaXTEXRLU", "Portable 2", "DMP2", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Sunset Rider",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "soK2d2JD0o4", "Portable 2", "DMP2", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "Syriana",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "4wqZNDhSNdA", "Portable 2", "DMP2", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Taekwonburi",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "J3Uz8sh88eA", "Portable 2", "DMP2", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "WhiteBlue",			[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "IfK-rAZYONA", "Portable 2", "DMP2", "zts", REGULAR_SONG, SHORT_MIX],
	[1, "Yellowberry -AJ Mix-",	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "dG0fI25_LiA", "Portable 2", "DMP2", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Yo Creo Que Si",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "u1_XA5rFQC4", "Portable 2", "DMP2", "Makou", REGULAR_SONG, SHORT_MIX],
	[1, "Your Own Miracle",		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://www.arcsystemworks.jp/portal/wordpress/wp-content/uploads/2017/10/Portable2_500.jpg", "_PdbVcsGtzE", "Portable 2", "DMP2", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],

	// Trilogy
	[1, "Nevermind",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "1CGzQDyyZOk", "Respect", "DMR", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "A Lie ~Deep Inside Mix~",				[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "sH5mv9_XRCE", "Trilogy", "DMTR", "makou / Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Bye Bye Love ~Nu Jazz Mix~",			[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "LwExN1MIynU", "Trilogy", "DMTR", "3rd Coast / Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Catch You",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "L1RQVCm7t-E", "Trilogy", "DMTR", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "For Seasons ~Air Guitar Mix~",			[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "OEVMejkGG7I", "Trilogy", "DMTR", "makou / Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Get Out ~Hip Noodle Mix~",				[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "gwTcYh4oz70", "Trilogy", "DMTR", "ND Lee / DJ EON", REGULAR_SONG, SHORT_MIX],
	[1, "Memory of Wind",						[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "cHxH6735QTw", "Trilogy", "DMTR", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Mind Control",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "QjQzt4w88rk", "Trilogy", "DMTR", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "My Jealousy",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "KAlEoc-N5jo", "Trilogy", "DMTR", "3rd Coast / Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "NB Girls",								[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "c0RphrqyXss", "Trilogy", "DMTR", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "sO mUCH iN LUV ~Melodic Twisted Mix~",	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "TMBGknV67mU", "Trilogy", "DMTR", "3rd Coast / Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Someday",								[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "65-9aSJKdHI", "Trilogy", "DMTR", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "STOP",									[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "09FkA7YPRnE", "Trilogy", "DMTR", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Streetlight",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "wgQ2KZf__2g", "Trilogy", "DMTR", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "Syriana ~Blast Wave Mix~",				[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "nzWZy6JkgA0", "Trilogy", "DMTR", "BEXTER / DJ EON", REGULAR_SONG, SHORT_MIX],
	[1, "Talk! Talk!",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "6BUqyS9IIxE", "Trilogy", "DMTR", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "The One",								[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "yom9zZpFYvg", "Trilogy", "DMTR", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Ventilator",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "adoH5W3ZI1Y", "Trilogy", "DMTR", "Cycle75", REGULAR_SONG, SHORT_MIX],
	[1, "Yo Creo Que Si ~Live House Version~",	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "XO8Wx3luiPo", "Trilogy", "DMTR", "makou / BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Your Own Miracle ~Disco House Mix~",	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "MSXWnqglduU", "Trilogy", "DMTR", "Ruby Tuesday / makou", REGULAR_SONG, SHORT_MIX],
	[1, "Zet",									[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271670/capsule_616x353.jpg", "M9UU1bAwzdA", "Trilogy", "DMTR", "BEXTER", REGULAR_SONG, SHORT_MIX],

	// Clazziquai Edition
	[1, "Rising The Sonic",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "ahdGgpeQVfg", "Respect", "DMR", "Dayz", REGULAR_SONG, SHORT_MIX],
	[1, "Closer",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "MrDHm1-qAKg", "Clazziquai Edition", "DMCE", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Coastal Tempo",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "xXKG6kYf4qY", "Clazziquai Edition", "DMCE", "3rd Coast / ReX", REGULAR_SONG, SHORT_MIX],
	[1, "Color",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "jRxs3-kXZuo", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Come to me",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "uD7QDovGxsk", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Creator",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "i2jXcSnEw6Y", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Dark Envy",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "dIkLF875EZw", "Clazziquai Edition", "DMCE", "Sugar Donut", REGULAR_SONG, SHORT_MIX],
	[1, "Electronics",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "GcUMJN1SZh8", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Fate",								[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "SNDonNU4eok", "Clazziquai Edition", "DMCE", "STi", REGULAR_SONG, SHORT_MIX],
	[1, "First Kiss",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "B9_n6PcBuM4", "Clazziquai Edition", "DMCE", "BJJ", REGULAR_SONG, SHORT_MIX],
	[1, "Flea",								[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "bOV_J5n3fXI", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Forever",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "2rUyE0TBaYU", "Clazziquai Edition", "DMCE", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Freedom",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "SzzWapLwWCU", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Here in the Moment",				[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "suuauPUw6V8", "Clazziquai Edition", "DMCE", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Here in the Moment ~Extended Mix~",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "SdCfQbqOGL4", "Clazziquai Edition", "DMCE", "Ruby Tuesday", LINK_DISC, EXTENDED_MIX],
	[1, "In My Heart",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "FoQLo1dW3qE", "Clazziquai Edition", "DMCE", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Love Mode",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "1PlY3kvGt18", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Lover (CE Style)",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "uPxrdsJAA14", "Clazziquai Edition", "DMCE", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Proposed, Flower, Wolf",			[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "pd6-NHf2akA", "Clazziquai Edition", "DMCE", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "Tell Me",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "8ppm0yuS4D4", "Clazziquai Edition", "DMCE", "Lee Geol", REGULAR_SONG, SHORT_MIX],
	[1, "The Clear Blue Sky",				[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "5Lwc_-U3PzM", "Clazziquai Edition", "DMCE", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "The Night Stage",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "kE2TuqFes3Q", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "To You",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "XqWjSGMY7SQ", "Clazziquai Edition", "DMCE", "Sweetune", REGULAR_SONG, SHORT_MIX],
	[1, "Urban Night (Clazziquai Edition)",	[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "T9DpL4nyA7Y", "Clazziquai Edition", "DMCE", "hYO", REGULAR_SONG, SHORT_MIX],
	[1, "Y (CE Style)",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "Qg4UJCM6btE", "Clazziquai Edition", "DMCE", "ND Lee", REGULAR_SONG, SHORT_MIX],

	// Black Square
	[1, "ANALYS",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "Y8GOUA747Ig", "Respect", "DMR", "HAYAKO", REGULAR_SONG, SHORT_MIX],
	[1, "Airwave ~Extended Mix~",			[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "TE8ChoO0Cu8", "Black Square", "DMBS", "ReX", LINK_DISC, EXTENDED_MIX],
	[1, "Beat U Down",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "Eoi0GlSWt2Y", "Black Square", "DMBS", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Colours of Sorrow",				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "htmqGeIABYc", "Black Square", "DMBS", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Cypher Gate",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "IssTYZ4mwWU", "Black Square", "DMBS", "7 Sequence", REGULAR_SONG, SHORT_MIX],
	[1, "Desperado",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "euqqD0T-7UI", "Black Square", "DMBS", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Fermion",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "jgJ2VjO9P80", "Black Square", "DMBS", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Fever Pitch Girl",					[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "Ji_WfAxdpVM", "Black Square", "DMBS", "Nikacha", REGULAR_SONG, SHORT_MIX],
	[1, "Get Down",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "0uG35q3PkJ4", "Black Square", "DMBS", "BJJ", REGULAR_SONG, SHORT_MIX],
	[1, "Grave Consequence",				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "ezeRJFx3ggU", "Black Square", "DMBS", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Heart of Witch",					[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "vlSKDIgdN0A", "Black Square", "DMBS", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "In my Dream",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "S-_HrhVFey0", "Black Square", "DMBS", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Jealousy",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "YwQ6GMT8wzo", "Black Square", "DMBS", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Keys to the World",				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "G-Tsxd3tEaE", "Black Square", "DMBS", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Lovely Hands",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "ueTc6tZSlh0", "Black Square", "DMBS", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Lover (BS Style)",					[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "axMpfA2UmPw", "Black Square", "DMBS", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "PDM",								[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "h5YTDj3cgmQ", "Black Square", "DMBS", "Trish / Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Proposed, Flower, Wolf Part.2",	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "fQBPtCA4v3E", "Black Square", "DMBS", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "Ready Now",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "88ZHtudb6Yg", "Black Square", "DMBS", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Ruti'n",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "CYv5Sw0HrZQ", "Black Square", "DMBS", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Secret World",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "i3OsnJn42XI", "Black Square", "DMBS", "Sweetune", REGULAR_SONG, SHORT_MIX],
	[1, "Y (BS Style)",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "9Kjc55BTZoc", "Black Square", "DMBS", "ND Lee", REGULAR_SONG, SHORT_MIX],
	
	// Technika 1
	[1, "Do you want it",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "4psK3x42jrg", "Respect", "DMR", "House Rulez / Kali", REGULAR_SONG, SHORT_MIX],
	[1, "Access",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "eg9q1JUI5ZY", "Technika 1", "DMT1", "SPHAZER", REGULAR_SONG, SHORT_MIX],
	[1, "Area 7",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "g798zBeEv1U", "Technika 1", "DMT1", "SPHAZER", REGULAR_SONG, SHORT_MIX],
	[1, "Beyond the Future",			[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "yf16uuhz3F8", "Technika 1", "DMT1", "7 Sequence", REGULAR_SONG, SHORT_MIX],
	[1, "Dear My Lady",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "le1UI9hBYcM", "Technika 1", "DMT1", "Oriental ST8", REGULAR_SONG, SHORT_MIX],
	[1, "DJMAX",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "3Lig9cuxbHQ", "Technika 1", "DMT1", "Humming Urban Stereo", REGULAR_SONG, SHORT_MIX],
	[1, "Fury",							[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "6NgNKDnmEC4", "Technika 1", "DMT1", "Sugar Donut", REGULAR_SONG, SHORT_MIX],
	[1, "HEXAD",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "SFcOo9bYDhY", "Technika 1", "DMT1", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Honeymoon",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "MT-PXlygsuk", "Technika 1", "DMT1", "Humming Urban Stereo", REGULAR_SONG, SHORT_MIX],
	[1, "I Want You",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "K0CYsqBnmWY", "Technika 1", "DMT1", "Lin-G", REGULAR_SONG, SHORT_MIX],
	[1, "Landscape",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "KaXFmMkwnhY", "Technika 1", "DMT1", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Melody",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "U6prZ_R2LzQ", "Technika 1", "DMT1", "bermei.inazawa / Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Play the Future",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "PmY8CEQ-WdQ", "Technika 1", "DMT1", "Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Remember",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "XhIjYzsaPIg", "Technika 1", "DMT1", "Lin-G", REGULAR_SONG, SHORT_MIX],
	[1, "Shoreline",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "bCDCYRBHzGk", "Technika 1", "DMT1", "Oriental ST8", REGULAR_SONG, SHORT_MIX],
	[1, "SON OF SUN",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "BCRkabc_NTM", "Technika 1", "DMT1", "Hosoe Shinji", REGULAR_SONG, SHORT_MIX],
	[1, "SON OF SUN ~Extended Mix~",	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "OBqoKJtu_5k", "Technika 1", "DMT1", "Hosoe Shinji", LINK_DISC, EXTENDED_MIX],
	[1, "Supersonic",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "893RlJyO-wc", "Technika 1", "DMT1", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet Shining Shooting Star",	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "E9VuY2z54YI", "Technika 1", "DMT1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "The Last Dance",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "hAr8CJZtIjc", "Technika 1", "DMT1", "Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Thor",							[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "oUbF_SGie58", "Technika 1", "DMT1", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "Voyage",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "zBbXvOdBV6c", "Technika 1", "DMT1", "makou", REGULAR_SONG, SHORT_MIX],
	
	// Technika 2
	[1, "End of Mythology",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "G3aRgjqL_I8", "Respect", "DMR", "Alice Schach and the Magic Orchestra", REGULAR_SONG, SHORT_MIX],
	[1, "Airwave",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "Ej64Vj30VyY", "Technika 2", "DMT2", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "BEE-U-TIFUL",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "1yY5WX96X5A", "Technika 2", "DMT2", "First Aid", REGULAR_SONG, SHORT_MIX],
	[1, "Burn It Down",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "f2rlSLzrH3w", "Technika 2", "DMT2", "P'sycho-Remi", REGULAR_SONG, SHORT_MIX],
	[1, "Cosmic Fantastic Lovesong",	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "NBjhGBy5qrE", "Technika 2", "DMT2", "DINY", REGULAR_SONG, SHORT_MIX],
	[1, "Cozy Quilt",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "lA4CWquu3tA", "Technika 2", "DMT2", "bermei.inazawa", REGULAR_SONG, SHORT_MIX],
	[1, "D2",							[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "927PVGtIgfA", "Technika 2", "DMT2", "First Aid", REGULAR_SONG, SHORT_MIX],
	[1, "Dream of Winds",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "8FFGY7w0IFY", "Technika 2", "DMT2", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "Dual Strikers",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "W4j005HdOl0", "Technika 2", "DMT2", "7 Sequence", REGULAR_SONG, SHORT_MIX],
	[1, "Eternal Fantasy",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "F7pD-QFND2g", "Technika 2", "DMT2", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "La Campanella : Nu Rave",		[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "YeGbKlnOTpw", "Technika 2", "DMT2", "cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Love is Beautiful",			[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "zuCwc-BZoEE", "Technika 2", "DMT2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "MonoXide",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "v_15riLmzZU", "Technika 2", "DMT2", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Nova (Mr.Funky Remix)",		[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "x9wTg7GVQXc", "Technika 2", "DMT2", "BEXTER / Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Put Em Up",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "IwSyvJ0aJwo", "Technika 2", "DMT2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Puzzler",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "avCn9MGiM0E", "Technika 2", "DMT2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Rage of Demon",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "PxSUSqjJKmc", "Technika 2", "DMT2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Say It From Your Heart",		[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "GZSqumeIbs4", "Technika 2", "DMT2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet Dream",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "KPi0eS0oBC4", "Technika 2", "DMT2", "Lin-G", REGULAR_SONG, SHORT_MIX],
	[1, "The Guilty",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "0G8Vat_fusk", "Technika 2", "DMT2", "P'sycho-Remi", REGULAR_SONG, SHORT_MIX],
	[1, "Trip",							[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "H4mbaEg5NX0", "Technika 2", "DMT2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "XLASHER",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "DpnCmsE0u2Q", "Technika 2", "DMT2", "Hosoe Shinji", REGULAR_SONG, SHORT_MIX],
	[1, "Thor ~Extended Mix~",			[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "MS1B_teArP4", "Technika 2", "DMT2", "XeoN", REGULAR_SONG, EXTENDED_MIX],
	[1, "Y ~Extended Mix~",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "OfiaVmAGV7I", "Technika 2", "DMT2", "ND Lee", REGULAR_SONG, EXTENDED_MIX],
	
	// Technika 3
	[1, "ALiCE",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "s8W2A7GVQ54", "Respect", "DMR", "seibin", REGULAR_SONG, SHORT_MIX],
	[1, "설레임(HeartBeat) Part.2",	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "ckkzuRdES6g", "Technika 3", "DMT3", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "유령(Ghost)",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "AQVZ_vYexQ8", "Technika 3", "DMT3", "STi", REGULAR_SONG, SHORT_MIX],
	[1, "A Life With You",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "hWqaNe7Xors", "Technika 3", "DMT3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "AD2222",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "ryvIlLlqlhQ", "Technika 3", "DMT3", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "AD2222 ~Extended Mix~",	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "kGSZbtAqj2o", "Technika 3", "DMT3", "Croove", REGULAR_SONG, EXTENDED_MIX],
	[1, "Angel",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "GWPKhN3lqnQ", "Technika 3", "DMT3", "Laurent Newfield / Ravenant", REGULAR_SONG, SHORT_MIX],
	[1, "Bamboo on Bamboo",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "x7HEXmxtgU8", "Technika 3", "DMT3", "Sampling Masters MEGA", REGULAR_SONG, SHORT_MIX],
	[1, "Black Swan",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "d6-PPdBdXak", "Technika 3", "DMT3", "TAK", REGULAR_SONG, SHORT_MIX],
	[1, "Dark Prism",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "_JsG6FBaDR8", "Technika 3", "DMT3", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Dream Again",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "dH5x8WOg3ME", "Technika 3", "DMT3", "DINY", REGULAR_SONG, SHORT_MIX],
	[1, "EGG",						[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "003Jm2RZx9g", "Technika 3", "DMT3", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "EGG ~Extended Mix~",		[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "BVsv9CuJA38", "Technika 3", "DMT3", "Nauts", REGULAR_SONG, EXTENDED_MIX],
	[1, "Emblem",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "sFHn175wDqg", "Technika 3", "DMT3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Fallin' in LUV",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "oHGCMpGqnDs", "Technika 3", "DMT3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Feel Ma Beat",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "sm0Zufxnp08", "Technika 3", "DMT3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Give Me 5",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "ovqtp2GivBM", "Technika 3", "DMT3", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Kung-Fu Rider",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "LAf-wrYXpZs", "Technika 3", "DMT3", "AstroKid", REGULAR_SONG, SHORT_MIX],
	[1, "My Heart, My Soul",		[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "WLBqXBGPDVk", "Technika 3", "DMT3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Now a NEW Day",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "KrJyGhPK-Mw", "Technika 3", "DMT3", "Sui.Jay", REGULAR_SONG, SHORT_MIX],
	[1, "Out of CTRL",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "oe9mdnytyVA", "Technika 3", "DMT3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Over the Rainbow",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "fzzTmCrIfMo", "Technika 3", "DMT3", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Right Back",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "_waGyYAV2DA", "Technika 3", "DMT3", "TANUKI", REGULAR_SONG, SHORT_MIX],
	[1, "Showdown",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "vl9bG_o_INE", "Technika 3", "DMT3", "LeeZu", REGULAR_SONG, SHORT_MIX],
	[1, "SigNalize",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "6DLxx6K-hFw", "Technika 3", "DMT3", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "SuperNova",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "-4ZEOqXEzEM", "Technika 3", "DMT3", "cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Supersonic 2011",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "PtD8AMnJApE", "Technika 3", "DMT3", "Sound LAB", REGULAR_SONG, SHORT_MIX],
	[1, "Wanna Be Your Lover",		[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "IQ5mV0EFw8U", "Technika 3", "DMT3", "Laurent Newfield / Ravenant", REGULAR_SONG, SHORT_MIX],
	[1, "Xeus",						[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "FtODrCGHa5c", "Technika 3", "DMT3", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "You & Me",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "GTdZqN_yizs", "Technika 3", "DMT3", "NieN", REGULAR_SONG, SHORT_MIX],

	// Emotional Sense
	[1, "Cosmic Elevator",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "Kd72hDtQ77w", "Emotional Sense", "ES", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Feel",							[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "EExs5QEVzXs", "Emotional Sense", "ES", "DJ Mocha", REGULAR_SONG, SHORT_MIX],
	[1, "Knowledge System",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "KnSgHNyEfXw", "Emotional Sense", "ES", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Real Over Drive",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "EniJ8UEuz2Y", "Emotional Sense", "ES", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Space of Soul",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "3nsIBHLZGJk", "Emotional Sense", "ES", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Super Lovely",					[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "gs5bACRz3bU", "Emotional Sense", "ES", "EarBreaker", REGULAR_SONG, SHORT_MIX],
	[1, "Urban Night (DJMAX Online)",	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "q5_OWmEjw-U", "Emotional Sense", "ES", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Yo! Max!",						[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "YWC28cLaAL4", "Emotional Sense", "ES", "ND Lee", REGULAR_SONG, SHORT_MIX],

	// V Extension
	[1, "Attack",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "0Lt2NERKgG4", "V Extension", "VE", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "BLACK GOLD",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "iV0tpqo0E1A", "V Extension", "VE", "cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Do It",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "mCohUvkMwb0", "V Extension", "VE", "House Rulez", REGULAR_SONG, SHORT_MIX],
	[1, "Dream It",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "-H6rGmtHfuo", "V Extension", "VE", "Bexter", REGULAR_SONG, SHORT_MIX],
	[1, "Fancy Night",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "i3M3_zqDdZE", "V Extension", "VE", "Sina x Chuck", REGULAR_SONG, SHORT_MIX],
	[1, "FIGHT NIGHT (feat. Calyae)",			[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "LaSwOfJ8dns", "V Extension", "VE", "Messier", REGULAR_SONG, SHORT_MIX],
	[1, "Kensei",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "pecxsy3Z318", "V Extension", "VE", "Pure 100%", REGULAR_SONG, SHORT_MIX],
	[1, "Lisrim",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "XM8Najws_Mk", "V Extension", "VE", "onoken", REGULAR_SONG, SHORT_MIX],
	[1, "Lost Serenity",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "A6dOKwTvarc", "V Extension", "VE", "Benicx", REGULAR_SONG, SHORT_MIX],
	[1, "Lost Temple",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "qBpLcVDJU44", "V Extension", "VE", "IMLAY", REGULAR_SONG, SHORT_MIX],
	[1, "Maharajah -fenomeno edition-",			[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "_QAdanFBYYA", "V Extension", "VE", "Alice Schach and the Magic Orchestra", REGULAR_SONG, SHORT_MIX],
	[1, "Misty Er'A",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "fx8bYk5PcM8", "V Extension", "VE", "Mycin.T x jam-jam", REGULAR_SONG, SHORT_MIX],
	[1, "Move Yourself",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "YLO9rE6JnJA", "V Extension", "VE", "IMLAY/YESSO", REGULAR_SONG, SHORT_MIX],
	[1, "NANAIRO",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "Z4utnvNjoI4", "V Extension", "VE", "HAYAKO", REGULAR_SONG, SHORT_MIX],
	[1, "Never Die",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "sClhXsaUIGw", "V Extension", "VE", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Remember Me",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "TyKgTJ-BAFo", "V Extension", "VE", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Space Challenger",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "Q-CbwgGUpNQ", "V Extension", "VE", "Bagagee Viphex13", REGULAR_SONG, SHORT_MIX],
	[1, "Vile Requiem",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "ZE8Po36RkqE", "V Extension", "VE", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "welcome to the space (feat. Jisun)",	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "7K_wmnT_Qwc", "V Extension", "VE", "Pory", REGULAR_SONG, SHORT_MIX],
	[1, "WONDER $LOT 777",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "Wk9d9GQbBEs", "V Extension", "VE", "MYUKKE.", REGULAR_SONG, SHORT_MIX],

	// Dok2 - Only On
	[1, "Only On", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e02fdf812e9da9c76233ecddc3c", "BeNk6oN65dY", "Event", "DOK2", "Dok2 / HELIXX", REGULAR_SONG, SHORT_MIX],
	
	// Guilty Gear
	[1, "Break a Spell",					[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "_kK3J0052pU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	[1, "Holy Orders (Be Just Or Be Dead)",	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "SMIXv7WuCZ4", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	[1, "Marionette",						[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "4RYTgFia0RU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	
	// Girls' Frontline
	[1, "Barbarous Funera",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Girls' Frontline", "GF", "Rikako Watanabe", REGULAR_SONG, SHORT_MIX],
	[1, "Frontline",				[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "RH_8HOfRmp4", "Girls' Frontline", "GF", "B@kamin / M2U", REGULAR_SONG, SHORT_MIX],
	[1, "What am I fighting for?",	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "IOGxyC_Dar0", "Girls' Frontline", "GF", "Haloweak", REGULAR_SONG, SHORT_MIX],
	
	// Groove Coaster
	[1, "Black MInD",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "_7iEZimewKE", "Groove Coaster", "GC", "COSIO", REGULAR_SONG, SHORT_MIX],
	[1, "Good Night, Bad Luck.",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "mZXNt08GfK4", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Got more raves?",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "JNnQOs5zkk0", "Groove Coaster", "GC", "E.G.G.", REGULAR_SONG, SHORT_MIX],
	[1, "Groove Prayer",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "LGH7kNXqXGc", "Groove Coaster", "GC", "COSIO", REGULAR_SONG, SHORT_MIX],
	[1, "HB-axeleration",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "4EeFWe2lLek", "Groove Coaster", "GC", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Marry me, Nightmare",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "wbgjJ84SZmw", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "ouroboros -twin stroke of the end-",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "BozGJJJUrUU", "Groove Coaster", "GC", "cranky / MASAKI", REGULAR_SONG, SHORT_MIX],
	[1, "OVER THE NIGHT",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "TanjhRfa6eo", "Groove Coaster", "GC", "REDALiCE", REGULAR_SONG, SHORT_MIX],
	[1, "Satisfiction",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "wUxyWSpopXo", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Warrior",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "p55PziQGLDA", "Groove Coaster", "GC", "cranky", REGULAR_SONG, SHORT_MIX],

	// Deemo
	[1, "Angelic Sphere",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "BDIWrU3TbYE", "Deemo", "DM", "3R2", REGULAR_SONG, SHORT_MIX],
	[1, "ANiMA",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "tJFjBCe20H4", "Deemo", "DM", "xi", REGULAR_SONG, SHORT_MIX],
	[1, "Dream",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "FXkrjfZQUuQ", "Deemo", "DM", "Rabpit", REGULAR_SONG, SHORT_MIX],
	[1, "Legacy",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "H3TpRoDC9SU", "Deemo", "DM", "switchworks", REGULAR_SONG, SHORT_MIX],
	[1, "Magnolia",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "jDEQ7UTIKsA", "Deemo", "DM", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Nine point eight",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "YlOWFOSsaCI", "Deemo", "DM", "Mili", REGULAR_SONG, SHORT_MIX],
	[1, "Sairai",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "trzogtjYcTc", "Deemo", "DM", "Shinichi Kobayashi", REGULAR_SONG, SHORT_MIX],
	[1, "Undo",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "Rf_NobfcyvY", "Deemo", "DM", "Yuk-cheung Chun", REGULAR_SONG, SHORT_MIX],
	[1, "Utopiosphere",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "KazdHqs1fvU", "Deemo", "DM", "Mili", REGULAR_SONG, SHORT_MIX],
	[1, "YUBIKIRI-GENMAN",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "Ju-JhfKO1o0", "Deemo", "DE", "Mili", REGULAR_SONG, SHORT_MIX],

	// Cytus
	[1, "AXION",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "vF-y-Ap1NiI", "Cytus", "CY", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "CODE NAME: ZERO",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "WIiG8bHoAbM", "Cytus", "CY", "NeLIME", REGULAR_SONG, SHORT_MIX],
	[1, "conflict",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "fEcI8wW_omw", "Cytus", "CY", "Cranky+siromaru", REGULAR_SONG, SHORT_MIX],
	[1, "EMber",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "OjTzVsy5xtw", "Cytus", "CY", "SIHanatsuka", REGULAR_SONG, SHORT_MIX],
	[1, "Entrance",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "C3Hum0ej_rc", "Cytus", "CY", "Ice", REGULAR_SONG, SHORT_MIX],
	[1, "L",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "1bt6S4DbyJI", "Cytus", "CY", "Ice", REGULAR_SONG, SHORT_MIX],
	[1, "Les Parfums de L'Amour",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "PFukE8XmhKE", "Cytus", "CY", "naotyu-", REGULAR_SONG, SHORT_MIX],
	[1, "Mammal",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "sZtBIP2SgL4", "Cytus", "CY", "Teikyou", REGULAR_SONG, SHORT_MIX],
	[1, "Myosotis",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "netCEsALPhw", "Cytus", "CY", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Old Gold",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "uevVv8zo0oU", "Cytus", "CY", "Cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Shoot Out",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "o2htkoZWW8A", "Cytus", "CY", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Ververg",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "329pzl2R38U", "Cytus", "CY", "onoken", REGULAR_SONG, SHORT_MIX],

	// // Chunithm
	[1, "Cyberozar",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "cGxEd3rgvqA", "Chunithm", "CHU", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "Garakuta Doll Play",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "iSPJM2xiw9E", "Chunithm", "CHU", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Ikazuchi",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "0Z77JgHr7Pk", "Chunithm", "CHU", "Takenobu Mitsuyoshi", REGULAR_SONG, SHORT_MIX],
	[1, "Ray Tuning",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "hBHEDoRSLQg", "Chunithm", "CHU", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "The wheel to the right",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "o-fzrbk--o4", "Chunithm", "CHU", "Sampling Masters MEGA", REGULAR_SONG, SHORT_MIX],
	[1, "Trrricksters!!",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "RrIyhEq7TX0", "Chunithm", "CHU", "s-don vs. Hino Isuka", REGULAR_SONG, SHORT_MIX],
	
	// Portable 3
	[1, "glory day (JHS Remix)",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "Fdu3kT2aAi4", "Respect", "DMR", "Bexter & Mycin.T (Remixed by JHS)", REGULAR_SONG, SHORT_MIX],
	[1, "glory day (Mintorment Remix)",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "FtEmR9zdTGY", "Respect", "DMR", "Bexter & Mycin.T (Remixed by Mintorment)", REGULAR_SONG, SHORT_MIX],
	[1, "Become Myself",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "GKg07PKWJow", "Portable 3", "DMP3", "PIA", REGULAR_SONG, SHORT_MIX],
	[1, "Break!",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "NppRvfIWVX4", "Portable 3", "DMP3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Desperado ~Nu Skool Mix~",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "cY3cKPKl5jw", "Portable 3", "DMP3", "Croove (Remixed by Paul Bazooka)", REGULAR_SONG, SHORT_MIX],
	[1, "Enemy Storm ~Dark Jungle Mix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "hxnVTJHimgU", "Portable 3", "DMP3", "Croove (Remixed by Paul Bazooka)", REGULAR_SONG, SHORT_MIX],
	[1, "Everything",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "z9HpAgYDHV4", "Portable 3", "DMP3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Gone Astray",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "nCumwaA9UM4", "Portable 3", "DMP3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Hanz Up!",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "6N4qEY9V5Hw", "Portable 3", "DMP3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "IF",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "LsMms1I5-VI", "Portable 3", "DMP3", "Vanilla Unity", REGULAR_SONG, SHORT_MIX],
	[1, "Leave Me Alone",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "KVry8-jlr5s", "Portable 3", "DMP3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Luv Flow ~Funky House Mix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "4-sYjg5ciS4", "Portable 3", "DMP3", "3rd Coast (Remixed by Paul Bazooka)", REGULAR_SONG, SHORT_MIX],
	[1, "Luv is True",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "-b-yKbvdxU0", "Portable 3", "DMP3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "MASAI ~Electro House Mix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "yY_Lpk8etvo", "Portable 3", "DMP3", "Croove (Remixed by Paul Bazooka)", REGULAR_SONG, SHORT_MIX],
	[1, "Mellow D Fantasy",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "0qw3T3l78Wk", "Portable 3", "DMP3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "NB Ranger : NonStop Remix",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "qmIUEv4zoxY", "Portable 3", "DMP3", "M2U, NieN, Sugar Donut (Remixed by Paul Bazooka)", REGULAR_SONG, SHORT_MIX],
	[1, "Out Law - Reborn",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "AT0rNlMjTWQ", "Portable 3", "DMP3", "Croove (Remixed by Mr.Funky)", REGULAR_SONG, SHORT_MIX],
	[1, "Raise Me Up",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "SAPsOzFA_hQ", "Portable 3", "DMP3", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Season (Warm Mix)",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "lYwMbNDlVeY", "Portable 3", "DMP3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "SuperSonic ~Mr.Funky Remix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "IGHGxVsbTok", "Portable 3", "DMP3", "Planetboom (Remixed by Mr.Funky)", REGULAR_SONG, SHORT_MIX],
	[1, "The Rain Maker",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "_p0JuJ-FCfM", "Portable 3", "DMP3", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Waiting for the Sun",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "WBWZDbuCYcs", "Portable 3", "DMP3", "MindCube", REGULAR_SONG, SHORT_MIX],
	[1, "Your Smile",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "49bqK4ogNMQ", "Portable 3", "DMP3", "Cistrans (Roseline)", REGULAR_SONG, SHORT_MIX],
	[1, "ZET ~Mr.Funky Remix~",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "8dcys2h6eSM", "Portable 3", "DMP3", "BEXTER (Remixed by Mr.Funky)", REGULAR_SONG, SHORT_MIX],

	// ESTIMATE
	[1, "Helix",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "kHgRkFN6M18", "ESTIMATE", "ESTI", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "In My Heart ~ESTi Remix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "rW5Z3uPqGkk", "ESTIMATE", "ESTI", "Tsukasa (Remixed by ESTi)", REGULAR_SONG, SHORT_MIX],
	[1, "Obelisque",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "x30u10gtGco", "ESTIMATE", "ESTI", "ESTi & M2U", REGULAR_SONG, SHORT_MIX],
	[1, "pit-a-pet",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "XH6_O9ljmTk", "ESTIMATE", "ESTI", "TAK / seibin", REGULAR_SONG, SHORT_MIX],
	[1, "U-NIVUS",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "eoUXRvI6wLE", "ESTIMATE", "ESTI", "ESTi", REGULAR_SONG, SHORT_MIX],
];