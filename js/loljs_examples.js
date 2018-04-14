/** Examples / tests  for loljs */
  
var examples = Array();
/*
examples['Hello World'] = "LABAS\n\
  PARASAI \"Nu labas, ka yra?\"\n\
ATE\n";*/
examples['JUSTINO GIMTADIENIS SND'] = "GIMTADIENISPRASIDEDA\n\
  JUSTINASMLDC \"AS ESU MLDC, SAKO JUSTINAS\"\n\
GIMTADIENISBAIGIASI\n";
examples['If/Else'] = "LABAS\n\
TA PRASME cionai ivestis ir isvestis su salygomis\n\
TA PRASME jau cionai kazkokios logikos gal yra\n\
PAS MANE YRA TRENINGAI\n\
PARASAI \"daba spek kokie pas mane treningai??\"\n\
DUOK MAN TRENINGAI\n\
ATRODO KAD TRENINGAI YRA \"adidas\", AR TIKRAI?\n\
  TAIP TIKRAI\n\
    PARASAI \"normalei davei, dok penkis\"\n\
  TADA JEIGU ATRODO KAD TRENINGAI YRA \"nike\"\n\
    PARASAI \"normalei davei nors norejau adidas\"\n\
  TADA JEIGU ATRODO KAD TRENINGAI YRA \"puma\"\n\
    PARASAI \"tu mane gal boba laikai?\"\n\
  NU TADA\n\
    PARASAI \"koki ce kinieciu suda stumi gal nori dancius paskaiciuot?\"\n\
BAIGES VARIANTAI\n\
ATE";

examples['Darbas'] ="LABAS\n\
TA PRASME cionai daug galimibiu demonstrojam\n\
TA PRASME ir procedura ir cikla ir dar kaska\n\
PAS MANE YRA PINIGAI\n\
\n\
PINIGAI DABAR YRA 0\n\
PARASAI \"man reik pinigu daba galvoji ka daryt\"\n\
PARASAI \"gal man riek diena padirbet??\"\n\
PARASAI \"nu daba man siulik tiek kad as noreceu dyrpt\"\n\
\n\
DABAR TAIP DARAI PASIULIMAS\n\
  PARASAI \"daabr pasiulik normalei??\"\n\
  DUOK MAN PINIGAI\n\
  PINIGAI PAVERCIAM I NUMERIS\n\
  RADAU YRA PINIGAI\n\
TAI VAT TAIP DARAI\n\
\n\
DABAR TAIP DARAI PASIRINKIMAS YRA SUMA\n\
  PARASAI \"nu tai ziurim kiek gavom\"\n\
  ATRODO KAD 10 YRA DIDESNIS IS SUMA IR 10\n\
    TAIP TIKRAI\n\
      PARASAI \"tu kuo mane laikai??\"\n\
    TADA JEIGU ATRODO KAD 20 YRA DIDESNIS IS SUMA IR 20\n\
      PARASAI \"nu ble tiek tik viena bonke gaunas\"\n\
    TADA JEIGU ATRODO KAD 100 YRA DIDESNIS IS SUMA IR 100\n\
      PARASAI \"nu tu pagalvok gal daugiau gali dot??\"\n\
    NU TADA\n\
      PARASAI \"nu gerai tai dok avansa reik isgert\"\n\
  BAIGES VARIANTAI\n\
  RADAU YRA SUMA\n\
TAI VAT TAIP DARAI\n\
\n\
DABA GERAI PRASISUKSIM RATUKU\n\
  PAS MANE YRA ATLIGINIMAS KURIS YRA PASIRINKIMAS PASIULIMAS\n\
  PARASAI SUKISAM \"pasiulei man \" ATLIGINIMAS\n\
  JEIGU ATLIGINIMAS DIDESNIS NEGU 100?\n\
    PARASAI \"nu daba gerai pasiulei\"\n\
    EIKNX\n\
  VISKAS\n\
VISKAS\n\
\n\
ATE";