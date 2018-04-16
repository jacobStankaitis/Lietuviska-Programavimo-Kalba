/** Examples / tests  for loljs */
  
var examples = Array();

examples['Labas, pasauli!'] = "LABAS\n\
  PARASYK \"Labas, pasauli!\"\n\
IKI\n";
examples['Fibonačio skaičiai']=
"LABAS\n\
	PAS MANE YRA I KURIS YRA 0\n\
	PAS MANE YRA FIB1 KURIS YRA 0\n\
	PAS MANE YRA FIB2 KURIS YRA 1\n\
	PAS MANE YRA SKAICIUS\n\
	IVESK SKAICIUS\n\
	AS ESU CIKLE cikle DIDINU I KOL ATRODO KAD I IR SKAICIUS\n\
		PARASYK SUKISTI FIB2 \", \"!\n\
		PAS MANE YRA FIB3 KURIS YRA SUMA IS FIB1 IR FIB2\n\
		FIB1 DABAR YRA FIB2\n\
		FIB2 DABAR YRA FIB3\n\
	ISEINAME IS CIA cikle\n\
	PARASYK \"...\"\n\
IKI"
examples['If/Else (Jeigu/Jeigu ne)'] = "LABAS\n\
	NESAMONES \n\
	Ivesties ir isvesties demonstracija \n\
	Pirmoji logika \n\
	NESVARBU \n\
	\n\
	PAS MANE YRA LEDAI\n\
	PARASYK \"Spėk, kokie pas mane ledai?\"\n\
	IVESK LEDAI\n\
	ATRODO KAD LEDAI YRA \"šokoladiniai\", AR TIKRAI?\n\
		TAIP TIKRAI\n\
			PARASYK \"Teisingai\"\n\
		TADA JEIGU ATRODO KAD LEDAI YRA \"su vyšnių įdaru\"\n\
			PARASYK \"Ledai su vyšnių įdaru yra skanūs, bet dabar turiu šokoladinius ledus\"\n\
		TADA JEIGU ATRODO KAD LEDAI YRA \"ananasiniai\"\n\
			PARASYK \"Labai neskanu, nevalgyčiau, pas mane šokoladiniai\"\n\
		NA TADA\n\
			PARASYK \"Nesupratau? Ledai yra šokoladiniai\"\n\
	PASIBAIGE VARIANTAI\n\
ATE";
examples['Funkcijos/procedūros']="LABAS\n\
	NORIU PASIREIKSTI Funkcijos/procedūros\n\
	NORIU PASIREIKSTI viskas veikia\n\
	AS TURIU PINIGAI\n\
	\n\
	PINIGAI DABAR YRA 0\n\
	\n\
	PARASYK \"Man reikia pinigų, ką dabar daryt?\"\n\
	\n\
	PARASYK \"Gal reiktų susirasti darbą?\"\n\
	\n\
	PARASYK \"Na, tada siūlyk man savo geriausią atlyginimą, tokį, kad aš norėčiau dirbti\"\n\
	\n\
	DABAR TAIP DARYK PASIULYMAS\n\
		PARASYK \"Siūlyk!\"\n\
		\n\
		IVESK PINIGAI\n\
		PINIGAI PAVERSK I NUMERIS\n\
		RADAU YRA PINIGAI\n\
	TAI VA TAIP DARYK\n\
	\n\
	DABAR TAIP DARYK PASIRINKIMAS YRA SUMA\n\
		PARASYK \"Skaičiuoju\"\n\
		\n\
		ATRODO KAD 10 YRA DIDESNIS IS SUMA IR 10\n\
			TAIP TIKRAI\n\
				PARASYK \"Per mažai!\"\n\
			TADA JEIGU ATRODO KAD 20 YRA DIDESNIS IS SUMA IR 20\n\
				PARASYK \"Galėsiu nusipirkti tik vieną buteliuką vandens, gal daugiau?\"\n\
			TADA JEIGU ATRODO KAD 100 YRA DIDESNIS IS SUMA IR 100\n\
				PARASYK \"Daugiau?\"\n\
			NA TADA\n\
				PARASYK \"Nesvarbu, užteks\"\n\
		PASIBAIGE VARIANTAI\n\
		RADAU YRA SUMA\n\
	TAI VA TAIP DARYK\n\
	\n\
	DABAR PRADESIME SUKTIS RATUKU\n\
		PAS MANE YRA ATLIGYNIMAS KURIS YRA PASIRINKIMAS PASIULYMAS\n\
		\n\
		PARASYK SUKISAM \"Pasiūlei \" ATLYGINIMAS\n\
		JEIGU ATLYGINIMAS DIDESNIS NEGU 100?\n\
		\n\
			PARASYK \"Ačiū už šią didelę algą!\"\n\
			STOP\n\
		VISKAS\n\
	VISKAS\n\
	\n\
IKI"
examples['Ciklo pavyzdys'] = "LABAS\n\
	NORIU PASIREIKSTI Ciklo pavyzdys\n\
	NORIU PASIREIKSTI Skaičiuojam iki įvesties (SKAICIUS)\n\
	PAS MANE YRA X KURIS YRA 0\n\
	AS TURIU SKAICIUS\n\
	IVESK SKAICIUS\n\
	AS ESU CIKLE cikle DIDINU X KOL ATRODO KAD X IR SKAICIUS\n\
  	PARASYK X\n\
	ISEINAME IS CIA cikle\n\
IKI"
examples['Saviraiškos zona'] = ""
