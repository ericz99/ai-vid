const removeWhitespace = (str: string) => str.replace(/\s/g, "");

export const importFont = async (fontName: string): Promise<unknown> => {
  const importName = removeWhitespace(fontName);

  switch (importName) {
    case "Abel":
      return await import("@remotion/google-fonts/Abel");
    case "AbhayaLibre":
      return await import("@remotion/google-fonts/AbhayaLibre");
    case "Aboreto":
      return await import("@remotion/google-fonts/Aboreto");
    case "AbrilFatface":
      return await import("@remotion/google-fonts/AbrilFatface");
    case "AbyssinicaSIL":
      return await import("@remotion/google-fonts/AbyssinicaSIL");
    case "Aclonica":
      return await import("@remotion/google-fonts/Aclonica");
    case "Acme":
      return await import("@remotion/google-fonts/Acme");
    case "Actor":
      return await import("@remotion/google-fonts/Actor");
    case "Adamina":
      return await import("@remotion/google-fonts/Adamina");
    case "AdventPro":
      return await import("@remotion/google-fonts/AdventPro");
    case "AguafinaScript":
      return await import("@remotion/google-fonts/AguafinaScript");
    case "AkayaKanadaka":
      return await import("@remotion/google-fonts/AkayaKanadaka");
    case "AkayaTelivigala":
      return await import("@remotion/google-fonts/AkayaTelivigala");
    case "Akronim":
      return await import("@remotion/google-fonts/Akronim");
    case "Akshar":
      return await import("@remotion/google-fonts/Akshar");
    case "Aladin":
      return await import("@remotion/google-fonts/Aladin");
    case "Alata":
      return await import("@remotion/google-fonts/Alata");
    case "Alatsi":
      return await import("@remotion/google-fonts/Alatsi");
    case "AlbertSans":
      return await import("@remotion/google-fonts/AlbertSans");
    case "Aldrich":
      return await import("@remotion/google-fonts/Aldrich");
    case "Alef":
      return await import("@remotion/google-fonts/Alef");
    case "Alegreya":
      return await import("@remotion/google-fonts/Alegreya");
    case "AlegreyaSC":
      return await import("@remotion/google-fonts/AlegreyaSC");
    case "AlegreyaSans":
      return await import("@remotion/google-fonts/AlegreyaSans");
    case "AlegreyaSansSC":
      return await import("@remotion/google-fonts/AlegreyaSansSC");
    case "Aleo":
      return await import("@remotion/google-fonts/Aleo");
    case "AlexBrush":
      return await import("@remotion/google-fonts/AlexBrush");
    case "AlfaSlabOne":
      return await import("@remotion/google-fonts/AlfaSlabOne");
    case "Alice":
      return await import("@remotion/google-fonts/Alice");
    case "Alike":
      return await import("@remotion/google-fonts/Alike");
    case "AlikeAngular":
      return await import("@remotion/google-fonts/AlikeAngular");
    case "Alkalami":
      return await import("@remotion/google-fonts/Alkalami");
    case "Allan":
      return await import("@remotion/google-fonts/Allan");
    case "Allerta":
      return await import("@remotion/google-fonts/Allerta");
    case "AllertaStencil":
      return await import("@remotion/google-fonts/AllertaStencil");
    case "Allison":
      return await import("@remotion/google-fonts/Allison");
    case "Allura":
      return await import("@remotion/google-fonts/Allura");
    case "Almarai":
      return await import("@remotion/google-fonts/Almarai");
    case "Almendra":
      return await import("@remotion/google-fonts/Almendra");
    case "AlmendraDisplay":
      return await import("@remotion/google-fonts/AlmendraDisplay");
    case "AlmendraSC":
      return await import("@remotion/google-fonts/AlmendraSC");
    case "AlumniSans":
      return await import("@remotion/google-fonts/AlumniSans");
    case "AlumniSansCollegiateOne":
      return await import("@remotion/google-fonts/AlumniSansCollegiateOne");
    case "AlumniSansInlineOne":
      return await import("@remotion/google-fonts/AlumniSansInlineOne");
    case "AlumniSansPinstripe":
      return await import("@remotion/google-fonts/AlumniSansPinstripe");
    case "Amarante":
      return await import("@remotion/google-fonts/Amarante");
    case "Amaranth":
      return await import("@remotion/google-fonts/Amaranth");
    case "AmaticSC":
      return await import("@remotion/google-fonts/AmaticSC");
    case "Amethysta":
      return await import("@remotion/google-fonts/Amethysta");
    case "Amiko":
      return await import("@remotion/google-fonts/Amiko");
    case "Amiri":
      return await import("@remotion/google-fonts/Amiri");
    case "AmiriQuran":
      return await import("@remotion/google-fonts/AmiriQuran");
    case "Amita":
      return await import("@remotion/google-fonts/Amita");
    case "Anaheim":
      return await import("@remotion/google-fonts/Anaheim");
    case "AndadaPro":
      return await import("@remotion/google-fonts/AndadaPro");
    case "Andika":
      return await import("@remotion/google-fonts/Andika");
    case "AnekBangla":
      return await import("@remotion/google-fonts/AnekBangla");
    case "AnekDevanagari":
      return await import("@remotion/google-fonts/AnekDevanagari");
    case "AnekGujarati":
      return await import("@remotion/google-fonts/AnekGujarati");
    case "AnekGurmukhi":
      return await import("@remotion/google-fonts/AnekGurmukhi");
    case "AnekKannada":
      return await import("@remotion/google-fonts/AnekKannada");
    case "AnekLatin":
      return await import("@remotion/google-fonts/AnekLatin");
    case "AnekMalayalam":
      return await import("@remotion/google-fonts/AnekMalayalam");
    case "AnekOdia":
      return await import("@remotion/google-fonts/AnekOdia");
    case "AnekTamil":
      return await import("@remotion/google-fonts/AnekTamil");
    case "AnekTelugu":
      return await import("@remotion/google-fonts/AnekTelugu");
    case "Angkor":
      return await import("@remotion/google-fonts/Angkor");
    case "AnnieUseYourTelescope":
      return await import("@remotion/google-fonts/AnnieUseYourTelescope");
    case "AnonymousPro":
      return await import("@remotion/google-fonts/AnonymousPro");
    case "Antic":
      return await import("@remotion/google-fonts/Antic");
    case "AnticDidone":
      return await import("@remotion/google-fonts/AnticDidone");
    case "AnticSlab":
      return await import("@remotion/google-fonts/AnticSlab");
    case "Anton":
      return await import("@remotion/google-fonts/Anton");
    case "Antonio":
      return await import("@remotion/google-fonts/Antonio");
    case "Anybody":
      return await import("@remotion/google-fonts/Anybody");
    case "Arapey":
      return await import("@remotion/google-fonts/Arapey");
    case "Arbutus":
      return await import("@remotion/google-fonts/Arbutus");
    case "ArbutusSlab":
      return await import("@remotion/google-fonts/ArbutusSlab");
    case "ArchitectsDaughter":
      return await import("@remotion/google-fonts/ArchitectsDaughter");
    case "Archivo":
      return await import("@remotion/google-fonts/Archivo");
    case "ArchivoBlack":
      return await import("@remotion/google-fonts/ArchivoBlack");
    case "ArchivoNarrow":
      return await import("@remotion/google-fonts/ArchivoNarrow");
    case "AreYouSerious":
      return await import("@remotion/google-fonts/AreYouSerious");
    case "ArefRuqaa":
      return await import("@remotion/google-fonts/ArefRuqaa");
    case "ArefRuqaaInk":
      return await import("@remotion/google-fonts/ArefRuqaaInk");
    case "Arima":
      return await import("@remotion/google-fonts/Arima");
    case "Arimo":
      return await import("@remotion/google-fonts/Arimo");
    case "Arizonia":
      return await import("@remotion/google-fonts/Arizonia");
    case "Armata":
      return await import("@remotion/google-fonts/Armata");
    case "Arsenal":
      return await import("@remotion/google-fonts/Arsenal");
    case "Artifika":
      return await import("@remotion/google-fonts/Artifika");
    case "Arvo":
      return await import("@remotion/google-fonts/Arvo");
    case "Arya":
      return await import("@remotion/google-fonts/Arya");
    case "Asap":
      return await import("@remotion/google-fonts/Asap");
    case "AsapCondensed":
      return await import("@remotion/google-fonts/AsapCondensed");
    case "Asar":
      return await import("@remotion/google-fonts/Asar");
    case "Asset":
      return await import("@remotion/google-fonts/Asset");
    case "Assistant":
      return await import("@remotion/google-fonts/Assistant");
    case "Astloch":
      return await import("@remotion/google-fonts/Astloch");
    case "Asul":
      return await import("@remotion/google-fonts/Asul");
    case "Athiti":
      return await import("@remotion/google-fonts/Athiti");
    case "AtkinsonHyperlegible":
      return await import("@remotion/google-fonts/AtkinsonHyperlegible");
    case "Atma":
      return await import("@remotion/google-fonts/Atma");
    case "AtomicAge":
      return await import("@remotion/google-fonts/AtomicAge");
    case "Aubrey":
      return await import("@remotion/google-fonts/Aubrey");
    case "Audiowide":
      return await import("@remotion/google-fonts/Audiowide");
    case "AutourOne":
      return await import("@remotion/google-fonts/AutourOne");
    case "Average":
      return await import("@remotion/google-fonts/Average");
    case "AverageSans":
      return await import("@remotion/google-fonts/AverageSans");
    case "AveriaGruesaLibre":
      return await import("@remotion/google-fonts/AveriaGruesaLibre");
    case "AveriaLibre":
      return await import("@remotion/google-fonts/AveriaLibre");
    case "AveriaSansLibre":
      return await import("@remotion/google-fonts/AveriaSansLibre");
    case "AveriaSerifLibre":
      return await import("@remotion/google-fonts/AveriaSerifLibre");
    case "AzeretMono":
      return await import("@remotion/google-fonts/AzeretMono");
    case "B612":
      return await import("@remotion/google-fonts/B612");
    case "B612Mono":
      return await import("@remotion/google-fonts/B612Mono");
    case "BIZUDGothic":
      return await import("@remotion/google-fonts/BIZUDGothic");
    case "BIZUDMincho":
      return await import("@remotion/google-fonts/BIZUDMincho");
    case "BIZUDPGothic":
      return await import("@remotion/google-fonts/BIZUDPGothic");
    case "BIZUDPMincho":
      return await import("@remotion/google-fonts/BIZUDPMincho");
    case "Babylonica":
      return await import("@remotion/google-fonts/Babylonica");
    case "BadScript":
      return await import("@remotion/google-fonts/BadScript");
    case "Bahiana":
      return await import("@remotion/google-fonts/Bahiana");
    case "Bahianita":
      return await import("@remotion/google-fonts/Bahianita");
    case "BaiJamjuree":
      return await import("@remotion/google-fonts/BaiJamjuree");
    case "BakbakOne":
      return await import("@remotion/google-fonts/BakbakOne");
    case "Ballet":
      return await import("@remotion/google-fonts/Ballet");
    case "Baloo2":
      return await import("@remotion/google-fonts/Baloo2");
    case "BalooBhai2":
      return await import("@remotion/google-fonts/BalooBhai2");
    case "BalooBhaijaan2":
      return await import("@remotion/google-fonts/BalooBhaijaan2");
    case "BalooBhaina2":
      return await import("@remotion/google-fonts/BalooBhaina2");
    case "BalooChettan2":
      return await import("@remotion/google-fonts/BalooChettan2");
    case "BalooDa2":
      return await import("@remotion/google-fonts/BalooDa2");
    case "BalooPaaji2":
      return await import("@remotion/google-fonts/BalooPaaji2");
    case "BalooTamma2":
      return await import("@remotion/google-fonts/BalooTamma2");
    case "BalooTammudu2":
      return await import("@remotion/google-fonts/BalooTammudu2");
    case "BalooThambi2":
      return await import("@remotion/google-fonts/BalooThambi2");
    case "BalsamiqSans":
      return await import("@remotion/google-fonts/BalsamiqSans");
    case "Balthazar":
      return await import("@remotion/google-fonts/Balthazar");
    case "Bangers":
      return await import("@remotion/google-fonts/Bangers");
    case "Barlow":
      return await import("@remotion/google-fonts/Barlow");
    case "BarlowCondensed":
      return await import("@remotion/google-fonts/BarlowCondensed");
    case "BarlowSemiCondensed":
      return await import("@remotion/google-fonts/BarlowSemiCondensed");
    case "Barriecito":
      return await import("@remotion/google-fonts/Barriecito");
    case "Barrio":
      return await import("@remotion/google-fonts/Barrio");
    case "Basic":
      return await import("@remotion/google-fonts/Basic");
    case "Baskervville":
      return await import("@remotion/google-fonts/Baskervville");
    case "Battambang":
      return await import("@remotion/google-fonts/Battambang");
    case "Baumans":
      return await import("@remotion/google-fonts/Baumans");
    case "Bayon":
      return await import("@remotion/google-fonts/Bayon");
    case "BeVietnamPro":
      return await import("@remotion/google-fonts/BeVietnamPro");
    case "BeauRivage":
      return await import("@remotion/google-fonts/BeauRivage");
    case "BebasNeue":
      return await import("@remotion/google-fonts/BebasNeue");
    case "Belgrano":
      return await import("@remotion/google-fonts/Belgrano");
    case "Bellefair":
      return await import("@remotion/google-fonts/Bellefair");
    case "Belleza":
      return await import("@remotion/google-fonts/Belleza");
    case "Bellota":
      return await import("@remotion/google-fonts/Bellota");
    case "BellotaText":
      return await import("@remotion/google-fonts/BellotaText");
    case "BenchNine":
      return await import("@remotion/google-fonts/BenchNine");
    case "Benne":
      return await import("@remotion/google-fonts/Benne");
    case "Bentham":
      return await import("@remotion/google-fonts/Bentham");
    case "BerkshireSwash":
      return await import("@remotion/google-fonts/BerkshireSwash");
    case "Besley":
      return await import("@remotion/google-fonts/Besley");
    case "BethEllen":
      return await import("@remotion/google-fonts/BethEllen");
    case "Bevan":
      return await import("@remotion/google-fonts/Bevan");
    case "BhuTukaExpandedOne":
      return await import("@remotion/google-fonts/BhuTukaExpandedOne");
    case "BigShouldersDisplay":
      return await import("@remotion/google-fonts/BigShouldersDisplay");
    case "BigShouldersInlineDisplay":
      return await import("@remotion/google-fonts/BigShouldersInlineDisplay");
    case "BigShouldersInlineText":
      return await import("@remotion/google-fonts/BigShouldersInlineText");
    case "BigShouldersStencilDisplay":
      return await import("@remotion/google-fonts/BigShouldersStencilDisplay");
    case "BigShouldersStencilText":
      return await import("@remotion/google-fonts/BigShouldersStencilText");
    case "BigShouldersText":
      return await import("@remotion/google-fonts/BigShouldersText");
    case "BigelowRules":
      return await import("@remotion/google-fonts/BigelowRules");
    case "BigshotOne":
      return await import("@remotion/google-fonts/BigshotOne");
    case "Bilbo":
      return await import("@remotion/google-fonts/Bilbo");
    case "BilboSwashCaps":
      return await import("@remotion/google-fonts/BilboSwashCaps");
    case "BioRhyme":
      return await import("@remotion/google-fonts/BioRhyme");
    case "BioRhymeExpanded":
      return await import("@remotion/google-fonts/BioRhymeExpanded");
    case "Birthstone":
      return await import("@remotion/google-fonts/Birthstone");
    case "BirthstoneBounce":
      return await import("@remotion/google-fonts/BirthstoneBounce");
    case "Biryani":
      return await import("@remotion/google-fonts/Biryani");
    case "Bitter":
      return await import("@remotion/google-fonts/Bitter");
    case "BlackAndWhitePicture":
      return await import("@remotion/google-fonts/BlackAndWhitePicture");
    case "BlackHanSans":
      return await import("@remotion/google-fonts/BlackHanSans");
    case "BlackOpsOne":
      return await import("@remotion/google-fonts/BlackOpsOne");
    case "Blaka":
      return await import("@remotion/google-fonts/Blaka");
    case "BlakaHollow":
      return await import("@remotion/google-fonts/BlakaHollow");
    case "BlakaInk":
      return await import("@remotion/google-fonts/BlakaInk");
    case "Blinker":
      return await import("@remotion/google-fonts/Blinker");
    case "BodoniModa":
      return await import("@remotion/google-fonts/BodoniModa");
    case "Bokor":
      return await import("@remotion/google-fonts/Bokor");
    case "BonaNova":
      return await import("@remotion/google-fonts/BonaNova");
    case "Bonbon":
      return await import("@remotion/google-fonts/Bonbon");
    case "BonheurRoyale":
      return await import("@remotion/google-fonts/BonheurRoyale");
    case "Boogaloo":
      return await import("@remotion/google-fonts/Boogaloo");
    case "BowlbyOne":
      return await import("@remotion/google-fonts/BowlbyOne");
    case "BowlbyOneSC":
      return await import("@remotion/google-fonts/BowlbyOneSC");
    case "Brawler":
      return await import("@remotion/google-fonts/Brawler");
    case "BreeSerif":
      return await import("@remotion/google-fonts/BreeSerif");
    case "Brygada1918":
      return await import("@remotion/google-fonts/Brygada1918");
    case "BubblegumSans":
      return await import("@remotion/google-fonts/BubblegumSans");
    case "BubblerOne":
      return await import("@remotion/google-fonts/BubblerOne");
    case "Buda":
      return await import("@remotion/google-fonts/Buda");
    case "Buenard":
      return await import("@remotion/google-fonts/Buenard");
    case "Bungee":
      return await import("@remotion/google-fonts/Bungee");
    case "BungeeHairline":
      return await import("@remotion/google-fonts/BungeeHairline");
    case "BungeeInline":
      return await import("@remotion/google-fonts/BungeeInline");
    case "BungeeOutline":
      return await import("@remotion/google-fonts/BungeeOutline");
    case "BungeeShade":
      return await import("@remotion/google-fonts/BungeeShade");
    case "BungeeSpice":
      return await import("@remotion/google-fonts/BungeeSpice");
    case "Butcherman":
      return await import("@remotion/google-fonts/Butcherman");
    case "ButterflyKids":
      return await import("@remotion/google-fonts/ButterflyKids");
    case "Cabin":
      return await import("@remotion/google-fonts/Cabin");
    case "CabinCondensed":
      return await import("@remotion/google-fonts/CabinCondensed");
    case "CabinSketch":
      return await import("@remotion/google-fonts/CabinSketch");
    case "CaesarDressing":
      return await import("@remotion/google-fonts/CaesarDressing");
    case "Cagliostro":
      return await import("@remotion/google-fonts/Cagliostro");
    case "Cairo":
      return await import("@remotion/google-fonts/Cairo");
    case "CairoPlay":
      return await import("@remotion/google-fonts/CairoPlay");
    case "Caladea":
      return await import("@remotion/google-fonts/Caladea");
    case "Calistoga":
      return await import("@remotion/google-fonts/Calistoga");
    case "Calligraffitti":
      return await import("@remotion/google-fonts/Calligraffitti");
    case "Cambay":
      return await import("@remotion/google-fonts/Cambay");
    case "Cambo":
      return await import("@remotion/google-fonts/Cambo");
    case "Candal":
      return await import("@remotion/google-fonts/Candal");
    case "Cantarell":
      return await import("@remotion/google-fonts/Cantarell");
    case "CantataOne":
      return await import("@remotion/google-fonts/CantataOne");
    case "CantoraOne":
      return await import("@remotion/google-fonts/CantoraOne");
    case "Capriola":
      return await import("@remotion/google-fonts/Capriola");
    case "Caramel":
      return await import("@remotion/google-fonts/Caramel");
    case "Carattere":
      return await import("@remotion/google-fonts/Carattere");
    case "Cardo":
      return await import("@remotion/google-fonts/Cardo");
    case "Carme":
      return await import("@remotion/google-fonts/Carme");
    case "CarroisGothic":
      return await import("@remotion/google-fonts/CarroisGothic");
    case "CarroisGothicSC":
      return await import("@remotion/google-fonts/CarroisGothicSC");
    case "CarterOne":
      return await import("@remotion/google-fonts/CarterOne");
    case "Castoro":
      return await import("@remotion/google-fonts/Castoro");
    case "Catamaran":
      return await import("@remotion/google-fonts/Catamaran");
    case "Caudex":
      return await import("@remotion/google-fonts/Caudex");
    case "Caveat":
      return await import("@remotion/google-fonts/Caveat");
    case "CaveatBrush":
      return await import("@remotion/google-fonts/CaveatBrush");
    case "CedarvilleCursive":
      return await import("@remotion/google-fonts/CedarvilleCursive");
    case "CevicheOne":
      return await import("@remotion/google-fonts/CevicheOne");
    case "ChakraPetch":
      return await import("@remotion/google-fonts/ChakraPetch");
    case "Changa":
      return await import("@remotion/google-fonts/Changa");
    case "ChangaOne":
      return await import("@remotion/google-fonts/ChangaOne");
    case "Chango":
      return await import("@remotion/google-fonts/Chango");
    case "CharisSIL":
      return await import("@remotion/google-fonts/CharisSIL");
    case "Charm":
      return await import("@remotion/google-fonts/Charm");
    case "Charmonman":
      return await import("@remotion/google-fonts/Charmonman");
    case "Chathura":
      return await import("@remotion/google-fonts/Chathura");
    case "ChauPhilomeneOne":
      return await import("@remotion/google-fonts/ChauPhilomeneOne");
    case "ChelaOne":
      return await import("@remotion/google-fonts/ChelaOne");
    case "ChelseaMarket":
      return await import("@remotion/google-fonts/ChelseaMarket");
    case "Chenla":
      return await import("@remotion/google-fonts/Chenla");
    case "Cherish":
      return await import("@remotion/google-fonts/Cherish");
    case "CherryCreamSoda":
      return await import("@remotion/google-fonts/CherryCreamSoda");
    case "CherrySwash":
      return await import("@remotion/google-fonts/CherrySwash");
    case "Chewy":
      return await import("@remotion/google-fonts/Chewy");
    case "Chicle":
      return await import("@remotion/google-fonts/Chicle");
    case "Chilanka":
      return await import("@remotion/google-fonts/Chilanka");
    case "Chivo":
      return await import("@remotion/google-fonts/Chivo");
    case "Chonburi":
      return await import("@remotion/google-fonts/Chonburi");
    case "Cinzel":
      return await import("@remotion/google-fonts/Cinzel");
    case "CinzelDecorative":
      return await import("@remotion/google-fonts/CinzelDecorative");
    case "ClickerScript":
      return await import("@remotion/google-fonts/ClickerScript");
    case "Coda":
      return await import("@remotion/google-fonts/Coda");
    case "Codystar":
      return await import("@remotion/google-fonts/Codystar");
    case "Coiny":
      return await import("@remotion/google-fonts/Coiny");
    case "Combo":
      return await import("@remotion/google-fonts/Combo");
    case "Comfortaa":
      return await import("@remotion/google-fonts/Comfortaa");
    case "Comforter":
      return await import("@remotion/google-fonts/Comforter");
    case "ComforterBrush":
      return await import("@remotion/google-fonts/ComforterBrush");
    case "ComicNeue":
      return await import("@remotion/google-fonts/ComicNeue");
    case "ComingSoon":
      return await import("@remotion/google-fonts/ComingSoon");
    case "Commissioner":
      return await import("@remotion/google-fonts/Commissioner");
    case "ConcertOne":
      return await import("@remotion/google-fonts/ConcertOne");
    case "Condiment":
      return await import("@remotion/google-fonts/Condiment");
    case "Content":
      return await import("@remotion/google-fonts/Content");
    case "ContrailOne":
      return await import("@remotion/google-fonts/ContrailOne");
    case "Convergence":
      return await import("@remotion/google-fonts/Convergence");
    case "Cookie":
      return await import("@remotion/google-fonts/Cookie");
    case "Copse":
      return await import("@remotion/google-fonts/Copse");
    case "Corben":
      return await import("@remotion/google-fonts/Corben");
    case "Corinthia":
      return await import("@remotion/google-fonts/Corinthia");
    case "Cormorant":
      return await import("@remotion/google-fonts/Cormorant");
    case "CormorantGaramond":
      return await import("@remotion/google-fonts/CormorantGaramond");
    case "CormorantInfant":
      return await import("@remotion/google-fonts/CormorantInfant");
    case "CormorantSC":
      return await import("@remotion/google-fonts/CormorantSC");
    case "CormorantUnicase":
      return await import("@remotion/google-fonts/CormorantUnicase");
    case "CormorantUpright":
      return await import("@remotion/google-fonts/CormorantUpright");
    case "Courgette":
      return await import("@remotion/google-fonts/Courgette");
    case "CourierPrime":
      return await import("@remotion/google-fonts/CourierPrime");
    case "Cousine":
      return await import("@remotion/google-fonts/Cousine");
    case "Coustard":
      return await import("@remotion/google-fonts/Coustard");
    case "CoveredByYourGrace":
      return await import("@remotion/google-fonts/CoveredByYourGrace");
    case "CraftyGirls":
      return await import("@remotion/google-fonts/CraftyGirls");
    case "Creepster":
      return await import("@remotion/google-fonts/Creepster");
    case "CreteRound":
      return await import("@remotion/google-fonts/CreteRound");
    case "CrimsonPro":
      return await import("@remotion/google-fonts/CrimsonPro");
    case "CrimsonText":
      return await import("@remotion/google-fonts/CrimsonText");
    case "CroissantOne":
      return await import("@remotion/google-fonts/CroissantOne");
    case "Crushed":
      return await import("@remotion/google-fonts/Crushed");
    case "Cuprum":
      return await import("@remotion/google-fonts/Cuprum");
    case "CuteFont":
      return await import("@remotion/google-fonts/CuteFont");
    case "Cutive":
      return await import("@remotion/google-fonts/Cutive");
    case "CutiveMono":
      return await import("@remotion/google-fonts/CutiveMono");
    case "DMMono":
      return await import("@remotion/google-fonts/DMMono");
    case "DMSans":
      return await import("@remotion/google-fonts/DMSans");
    case "DMSerifDisplay":
      return await import("@remotion/google-fonts/DMSerifDisplay");
    case "DMSerifText":
      return await import("@remotion/google-fonts/DMSerifText");
    case "Damion":
      return await import("@remotion/google-fonts/Damion");
    case "DancingScript":
      return await import("@remotion/google-fonts/DancingScript");
    case "Dangrek":
      return await import("@remotion/google-fonts/Dangrek");
    case "DarkerGrotesque":
      return await import("@remotion/google-fonts/DarkerGrotesque");
    case "DavidLibre":
      return await import("@remotion/google-fonts/DavidLibre");
    case "DawningofaNewDay":
      return await import("@remotion/google-fonts/DawningofaNewDay");
    case "DaysOne":
      return await import("@remotion/google-fonts/DaysOne");
    case "Dekko":
      return await import("@remotion/google-fonts/Dekko");
    case "DelaGothicOne":
      return await import("@remotion/google-fonts/DelaGothicOne");
    case "Delius":
      return await import("@remotion/google-fonts/Delius");
    case "DeliusSwashCaps":
      return await import("@remotion/google-fonts/DeliusSwashCaps");
    case "DeliusUnicase":
      return await import("@remotion/google-fonts/DeliusUnicase");
    case "DellaRespira":
      return await import("@remotion/google-fonts/DellaRespira");
    case "DenkOne":
      return await import("@remotion/google-fonts/DenkOne");
    case "Devonshire":
      return await import("@remotion/google-fonts/Devonshire");
    case "Dhurjati":
      return await import("@remotion/google-fonts/Dhurjati");
    case "DidactGothic":
      return await import("@remotion/google-fonts/DidactGothic");
    case "Diplomata":
      return await import("@remotion/google-fonts/Diplomata");
    case "DiplomataSC":
      return await import("@remotion/google-fonts/DiplomataSC");
    case "DoHyeon":
      return await import("@remotion/google-fonts/DoHyeon");
    case "Dokdo":
      return await import("@remotion/google-fonts/Dokdo");
    case "Domine":
      return await import("@remotion/google-fonts/Domine");
    case "DonegalOne":
      return await import("@remotion/google-fonts/DonegalOne");
    case "Dongle":
      return await import("@remotion/google-fonts/Dongle");
    case "DoppioOne":
      return await import("@remotion/google-fonts/DoppioOne");
    case "Dorsa":
      return await import("@remotion/google-fonts/Dorsa");
    case "Dosis":
      return await import("@remotion/google-fonts/Dosis");
    case "DotGothic16":
      return await import("@remotion/google-fonts/DotGothic16");
    case "DrSugiyama":
      return await import("@remotion/google-fonts/DrSugiyama");
    case "DuruSans":
      return await import("@remotion/google-fonts/DuruSans");
    case "DynaPuff":
      return await import("@remotion/google-fonts/DynaPuff");
    case "Dynalight":
      return await import("@remotion/google-fonts/Dynalight");
    case "EBGaramond":
      return await import("@remotion/google-fonts/EBGaramond");
    case "EagleLake":
      return await import("@remotion/google-fonts/EagleLake");
    case "EastSeaDokdo":
      return await import("@remotion/google-fonts/EastSeaDokdo");
    case "Eater":
      return await import("@remotion/google-fonts/Eater");
    case "Economica":
      return await import("@remotion/google-fonts/Economica");
    case "Eczar":
      return await import("@remotion/google-fonts/Eczar");
    case "EduNSWACTFoundation":
      return await import("@remotion/google-fonts/EduNSWACTFoundation");
    case "EduQLDBeginner":
      return await import("@remotion/google-fonts/EduQLDBeginner");
    case "EduSABeginner":
      return await import("@remotion/google-fonts/EduSABeginner");
    case "EduTASBeginner":
      return await import("@remotion/google-fonts/EduTASBeginner");
    case "EduVICWANTBeginner":
      return await import("@remotion/google-fonts/EduVICWANTBeginner");
    case "ElMessiri":
      return await import("@remotion/google-fonts/ElMessiri");
    case "Electrolize":
      return await import("@remotion/google-fonts/Electrolize");
    case "Elsie":
      return await import("@remotion/google-fonts/Elsie");
    case "ElsieSwashCaps":
      return await import("@remotion/google-fonts/ElsieSwashCaps");
    case "EmblemaOne":
      return await import("@remotion/google-fonts/EmblemaOne");
    case "EmilysCandy":
      return await import("@remotion/google-fonts/EmilysCandy");
    case "EncodeSans":
      return await import("@remotion/google-fonts/EncodeSans");
    case "EncodeSansCondensed":
      return await import("@remotion/google-fonts/EncodeSansCondensed");
    case "EncodeSansExpanded":
      return await import("@remotion/google-fonts/EncodeSansExpanded");
    case "EncodeSansSC":
      return await import("@remotion/google-fonts/EncodeSansSC");
    case "EncodeSansSemiCondensed":
      return await import("@remotion/google-fonts/EncodeSansSemiCondensed");
    case "EncodeSansSemiExpanded":
      return await import("@remotion/google-fonts/EncodeSansSemiExpanded");
    case "Engagement":
      return await import("@remotion/google-fonts/Engagement");
    case "Englebert":
      return await import("@remotion/google-fonts/Englebert");
    case "Enriqueta":
      return await import("@remotion/google-fonts/Enriqueta");
    case "Ephesis":
      return await import("@remotion/google-fonts/Ephesis");
    case "Epilogue":
      return await import("@remotion/google-fonts/Epilogue");
    case "EricaOne":
      return await import("@remotion/google-fonts/EricaOne");
    case "Esteban":
      return await import("@remotion/google-fonts/Esteban");
    case "Estonia":
      return await import("@remotion/google-fonts/Estonia");
    case "EuphoriaScript":
      return await import("@remotion/google-fonts/EuphoriaScript");
    case "Ewert":
      return await import("@remotion/google-fonts/Ewert");
    case "Exo":
      return await import("@remotion/google-fonts/Exo");
    case "Exo2":
      return await import("@remotion/google-fonts/Exo2");
    case "ExpletusSans":
      return await import("@remotion/google-fonts/ExpletusSans");
    case "Explora":
      return await import("@remotion/google-fonts/Explora");
    case "Fahkwang":
      return await import("@remotion/google-fonts/Fahkwang");
    case "FamiljenGrotesk":
      return await import("@remotion/google-fonts/FamiljenGrotesk");
    case "FanwoodText":
      return await import("@remotion/google-fonts/FanwoodText");
    case "Farro":
      return await import("@remotion/google-fonts/Farro");
    case "Farsan":
      return await import("@remotion/google-fonts/Farsan");
    case "Fascinate":
      return await import("@remotion/google-fonts/Fascinate");
    case "FascinateInline":
      return await import("@remotion/google-fonts/FascinateInline");
    case "FasterOne":
      return await import("@remotion/google-fonts/FasterOne");
    case "Fasthand":
      return await import("@remotion/google-fonts/Fasthand");
    case "FaunaOne":
      return await import("@remotion/google-fonts/FaunaOne");
    case "Faustina":
      return await import("@remotion/google-fonts/Faustina");
    case "Federant":
      return await import("@remotion/google-fonts/Federant");
    case "Federo":
      return await import("@remotion/google-fonts/Federo");
    case "Felipa":
      return await import("@remotion/google-fonts/Felipa");
    case "Fenix":
      return await import("@remotion/google-fonts/Fenix");
    case "Festive":
      return await import("@remotion/google-fonts/Festive");
    case "Figtree":
      return await import("@remotion/google-fonts/Figtree");
    case "FingerPaint":
      return await import("@remotion/google-fonts/FingerPaint");
    case "Finlandica":
      return await import("@remotion/google-fonts/Finlandica");
    case "FiraCode":
      return await import("@remotion/google-fonts/FiraCode");
    case "FiraMono":
      return await import("@remotion/google-fonts/FiraMono");
    case "FiraSans":
      return await import("@remotion/google-fonts/FiraSans");
    case "FiraSansCondensed":
      return await import("@remotion/google-fonts/FiraSansCondensed");
    case "FiraSansExtraCondensed":
      return await import("@remotion/google-fonts/FiraSansExtraCondensed");
    case "FjallaOne":
      return await import("@remotion/google-fonts/FjallaOne");
    case "FjordOne":
      return await import("@remotion/google-fonts/FjordOne");
    case "Flamenco":
      return await import("@remotion/google-fonts/Flamenco");
    case "Flavors":
      return await import("@remotion/google-fonts/Flavors");
    case "FleurDeLeah":
      return await import("@remotion/google-fonts/FleurDeLeah");
    case "FlowBlock":
      return await import("@remotion/google-fonts/FlowBlock");
    case "FlowCircular":
      return await import("@remotion/google-fonts/FlowCircular");
    case "FlowRounded":
      return await import("@remotion/google-fonts/FlowRounded");
    case "Fondamento":
      return await import("@remotion/google-fonts/Fondamento");
    case "FontdinerSwanky":
      return await import("@remotion/google-fonts/FontdinerSwanky");
    case "Forum":
      return await import("@remotion/google-fonts/Forum");
    case "FrancoisOne":
      return await import("@remotion/google-fonts/FrancoisOne");
    case "FrankRuhlLibre":
      return await import("@remotion/google-fonts/FrankRuhlLibre");
    case "Fraunces":
      return await import("@remotion/google-fonts/Fraunces");
    case "FreckleFace":
      return await import("@remotion/google-fonts/FreckleFace");
    case "FrederickatheGreat":
      return await import("@remotion/google-fonts/FrederickatheGreat");
    case "Fredoka":
      return await import("@remotion/google-fonts/Fredoka");
    case "Freehand":
      return await import("@remotion/google-fonts/Freehand");
    case "Fresca":
      return await import("@remotion/google-fonts/Fresca");
    case "Frijole":
      return await import("@remotion/google-fonts/Frijole");
    case "Fruktur":
      return await import("@remotion/google-fonts/Fruktur");
    case "FugazOne":
      return await import("@remotion/google-fonts/FugazOne");
    case "Fuggles":
      return await import("@remotion/google-fonts/Fuggles");
    case "FuzzyBubbles":
      return await import("@remotion/google-fonts/FuzzyBubbles");
    case "GFSDidot":
      return await import("@remotion/google-fonts/GFSDidot");
    case "GFSNeohellenic":
      return await import("@remotion/google-fonts/GFSNeohellenic");
    case "Gabriela":
      return await import("@remotion/google-fonts/Gabriela");
    case "Gaegu":
      return await import("@remotion/google-fonts/Gaegu");
    case "Gafata":
      return await import("@remotion/google-fonts/Gafata");
    case "Galada":
      return await import("@remotion/google-fonts/Galada");
    case "Galdeano":
      return await import("@remotion/google-fonts/Galdeano");
    case "Galindo":
      return await import("@remotion/google-fonts/Galindo");
    case "GamjaFlower":
      return await import("@remotion/google-fonts/GamjaFlower");
    case "Gantari":
      return await import("@remotion/google-fonts/Gantari");
    case "Gayathri":
      return await import("@remotion/google-fonts/Gayathri");
    case "Gelasio":
      return await import("@remotion/google-fonts/Gelasio");
    case "GemunuLibre":
      return await import("@remotion/google-fonts/GemunuLibre");
    case "Genos":
      return await import("@remotion/google-fonts/Genos");
    case "GentiumBookPlus":
      return await import("@remotion/google-fonts/GentiumBookPlus");
    case "GentiumPlus":
      return await import("@remotion/google-fonts/GentiumPlus");
    case "Geo":
      return await import("@remotion/google-fonts/Geo");
    case "Georama":
      return await import("@remotion/google-fonts/Georama");
    case "Geostar":
      return await import("@remotion/google-fonts/Geostar");
    case "GeostarFill":
      return await import("@remotion/google-fonts/GeostarFill");
    case "GermaniaOne":
      return await import("@remotion/google-fonts/GermaniaOne");
    case "GideonRoman":
      return await import("@remotion/google-fonts/GideonRoman");
    case "Gidugu":
      return await import("@remotion/google-fonts/Gidugu");
    case "GildaDisplay":
      return await import("@remotion/google-fonts/GildaDisplay");
    case "Girassol":
      return await import("@remotion/google-fonts/Girassol");
    case "GiveYouGlory":
      return await import("@remotion/google-fonts/GiveYouGlory");
    case "GlassAntiqua":
      return await import("@remotion/google-fonts/GlassAntiqua");
    case "Glegoo":
      return await import("@remotion/google-fonts/Glegoo");
    case "GloriaHallelujah":
      return await import("@remotion/google-fonts/GloriaHallelujah");
    case "Glory":
      return await import("@remotion/google-fonts/Glory");
    case "Gluten":
      return await import("@remotion/google-fonts/Gluten");
    case "GoblinOne":
      return await import("@remotion/google-fonts/GoblinOne");
    case "GochiHand":
      return await import("@remotion/google-fonts/GochiHand");
    case "Goldman":
      return await import("@remotion/google-fonts/Goldman");
    case "Gorditas":
      return await import("@remotion/google-fonts/Gorditas");
    case "GothicA1":
      return await import("@remotion/google-fonts/GothicA1");
    case "Gotu":
      return await import("@remotion/google-fonts/Gotu");
    case "GoudyBookletter1911":
      return await import("@remotion/google-fonts/GoudyBookletter1911");
    case "GowunBatang":
      return await import("@remotion/google-fonts/GowunBatang");
    case "GowunDodum":
      return await import("@remotion/google-fonts/GowunDodum");
    case "Graduate":
      return await import("@remotion/google-fonts/Graduate");
    case "GrandHotel":
      return await import("@remotion/google-fonts/GrandHotel");
    case "Grandstander":
      return await import("@remotion/google-fonts/Grandstander");
    case "GrapeNuts":
      return await import("@remotion/google-fonts/GrapeNuts");
    case "GravitasOne":
      return await import("@remotion/google-fonts/GravitasOne");
    case "GreatVibes":
      return await import("@remotion/google-fonts/GreatVibes");
    case "GrechenFuemen":
      return await import("@remotion/google-fonts/GrechenFuemen");
    case "Grenze":
      return await import("@remotion/google-fonts/Grenze");
    case "GrenzeGotisch":
      return await import("@remotion/google-fonts/GrenzeGotisch");
    case "GreyQo":
      return await import("@remotion/google-fonts/GreyQo");
    case "Griffy":
      return await import("@remotion/google-fonts/Griffy");
    case "Gruppo":
      return await import("@remotion/google-fonts/Gruppo");
    case "Gudea":
      return await import("@remotion/google-fonts/Gudea");
    case "Gugi":
      return await import("@remotion/google-fonts/Gugi");
    case "Gulzar":
      return await import("@remotion/google-fonts/Gulzar");
    case "Gupter":
      return await import("@remotion/google-fonts/Gupter");
    case "Gurajada":
      return await import("@remotion/google-fonts/Gurajada");
    case "Gwendolyn":
      return await import("@remotion/google-fonts/Gwendolyn");
    case "Habibi":
      return await import("@remotion/google-fonts/Habibi");
    case "HachiMaruPop":
      return await import("@remotion/google-fonts/HachiMaruPop");
    case "Hahmlet":
      return await import("@remotion/google-fonts/Hahmlet");
    case "Halant":
      return await import("@remotion/google-fonts/Halant");
    case "HammersmithOne":
      return await import("@remotion/google-fonts/HammersmithOne");
    case "Hanalei":
      return await import("@remotion/google-fonts/Hanalei");
    case "HanaleiFill":
      return await import("@remotion/google-fonts/HanaleiFill");
    case "Handlee":
      return await import("@remotion/google-fonts/Handlee");
    case "Hanuman":
      return await import("@remotion/google-fonts/Hanuman");
    case "HappyMonkey":
      return await import("@remotion/google-fonts/HappyMonkey");
    case "Harmattan":
      return await import("@remotion/google-fonts/Harmattan");
    case "HeadlandOne":
      return await import("@remotion/google-fonts/HeadlandOne");
    case "Heebo":
      return await import("@remotion/google-fonts/Heebo");
    case "HennyPenny":
      return await import("@remotion/google-fonts/HennyPenny");
    case "HeptaSlab":
      return await import("@remotion/google-fonts/HeptaSlab");
    case "HerrVonMuellerhoff":
      return await import("@remotion/google-fonts/HerrVonMuellerhoff");
    case "HiMelody":
      return await import("@remotion/google-fonts/HiMelody");
    case "HinaMincho":
      return await import("@remotion/google-fonts/HinaMincho");
    case "Hind":
      return await import("@remotion/google-fonts/Hind");
    case "HindGuntur":
      return await import("@remotion/google-fonts/HindGuntur");
    case "HindMadurai":
      return await import("@remotion/google-fonts/HindMadurai");
    case "HindSiliguri":
      return await import("@remotion/google-fonts/HindSiliguri");
    case "HindVadodara":
      return await import("@remotion/google-fonts/HindVadodara");
    case "HoltwoodOneSC":
      return await import("@remotion/google-fonts/HoltwoodOneSC");
    case "HomemadeApple":
      return await import("@remotion/google-fonts/HomemadeApple");
    case "Homenaje":
      return await import("@remotion/google-fonts/Homenaje");
    case "Hubballi":
      return await import("@remotion/google-fonts/Hubballi");
    case "Hurricane":
      return await import("@remotion/google-fonts/Hurricane");
    case "IBMPlexMono":
      return await import("@remotion/google-fonts/IBMPlexMono");
    case "IBMPlexSans":
      return await import("@remotion/google-fonts/IBMPlexSans");
    case "IBMPlexSansArabic":
      return await import("@remotion/google-fonts/IBMPlexSansArabic");
    case "IBMPlexSansCondensed":
      return await import("@remotion/google-fonts/IBMPlexSansCondensed");
    case "IBMPlexSansDevanagari":
      return await import("@remotion/google-fonts/IBMPlexSansDevanagari");
    case "IBMPlexSansHebrew":
      return await import("@remotion/google-fonts/IBMPlexSansHebrew");
    case "IBMPlexSansKR":
      return await import("@remotion/google-fonts/IBMPlexSansKR");
    case "IBMPlexSansThai":
      return await import("@remotion/google-fonts/IBMPlexSansThai");
    case "IBMPlexSansThaiLooped":
      return await import("@remotion/google-fonts/IBMPlexSansThaiLooped");
    case "IBMPlexSerif":
      return await import("@remotion/google-fonts/IBMPlexSerif");
    case "IMFellDWPica":
      return await import("@remotion/google-fonts/IMFellDWPica");
    case "IMFellDWPicaSC":
      return await import("@remotion/google-fonts/IMFellDWPicaSC");
    case "IMFellDoublePica":
      return await import("@remotion/google-fonts/IMFellDoublePica");
    case "IMFellDoublePicaSC":
      return await import("@remotion/google-fonts/IMFellDoublePicaSC");
    case "IMFellEnglish":
      return await import("@remotion/google-fonts/IMFellEnglish");
    case "IMFellEnglishSC":
      return await import("@remotion/google-fonts/IMFellEnglishSC");
    case "IMFellFrenchCanon":
      return await import("@remotion/google-fonts/IMFellFrenchCanon");
    case "IMFellFrenchCanonSC":
      return await import("@remotion/google-fonts/IMFellFrenchCanonSC");
    case "IMFellGreatPrimer":
      return await import("@remotion/google-fonts/IMFellGreatPrimer");
    case "IMFellGreatPrimerSC":
      return await import("@remotion/google-fonts/IMFellGreatPrimerSC");
    case "IbarraRealNova":
      return await import("@remotion/google-fonts/IbarraRealNova");
    case "Iceberg":
      return await import("@remotion/google-fonts/Iceberg");
    case "Iceland":
      return await import("@remotion/google-fonts/Iceland");
    case "Imbue":
      return await import("@remotion/google-fonts/Imbue");
    case "ImperialScript":
      return await import("@remotion/google-fonts/ImperialScript");
    case "Imprima":
      return await import("@remotion/google-fonts/Imprima");
    case "Inconsolata":
      return await import("@remotion/google-fonts/Inconsolata");
    case "Inder":
      return await import("@remotion/google-fonts/Inder");
    case "IndieFlower":
      return await import("@remotion/google-fonts/IndieFlower");
    case "IngridDarling":
      return await import("@remotion/google-fonts/IngridDarling");
    case "Inika":
      return await import("@remotion/google-fonts/Inika");
    case "InknutAntiqua":
      return await import("@remotion/google-fonts/InknutAntiqua");
    case "InriaSans":
      return await import("@remotion/google-fonts/InriaSans");
    case "InriaSerif":
      return await import("@remotion/google-fonts/InriaSerif");
    case "Inspiration":
      return await import("@remotion/google-fonts/Inspiration");
    case "Inter":
      return await import("@remotion/google-fonts/Inter");
    case "InterTight":
      return await import("@remotion/google-fonts/InterTight");
    case "IrishGrover":
      return await import("@remotion/google-fonts/IrishGrover");
    case "IslandMoments":
      return await import("@remotion/google-fonts/IslandMoments");
    case "IstokWeb":
      return await import("@remotion/google-fonts/IstokWeb");
    case "Italiana":
      return await import("@remotion/google-fonts/Italiana");
    case "Italianno":
      return await import("@remotion/google-fonts/Italianno");
    case "Itim":
      return await import("@remotion/google-fonts/Itim");
    case "JacquesFrancois":
      return await import("@remotion/google-fonts/JacquesFrancois");
    case "JacquesFrancoisShadow":
      return await import("@remotion/google-fonts/JacquesFrancoisShadow");
    case "Jaldi":
      return await import("@remotion/google-fonts/Jaldi");
    case "JetBrainsMono":
      return await import("@remotion/google-fonts/JetBrainsMono");
    case "JimNightshade":
      return await import("@remotion/google-fonts/JimNightshade");
    case "Joan":
      return await import("@remotion/google-fonts/Joan");
    case "JockeyOne":
      return await import("@remotion/google-fonts/JockeyOne");
    case "JollyLodger":
      return await import("@remotion/google-fonts/JollyLodger");
    case "Jomhuria":
      return await import("@remotion/google-fonts/Jomhuria");
    case "Jomolhari":
      return await import("@remotion/google-fonts/Jomolhari");
    case "JosefinSans":
      return await import("@remotion/google-fonts/JosefinSans");
    case "JosefinSlab":
      return await import("@remotion/google-fonts/JosefinSlab");
    case "Jost":
      return await import("@remotion/google-fonts/Jost");
    case "JotiOne":
      return await import("@remotion/google-fonts/JotiOne");
    case "Jua":
      return await import("@remotion/google-fonts/Jua");
    case "Judson":
      return await import("@remotion/google-fonts/Judson");
    case "Julee":
      return await import("@remotion/google-fonts/Julee");
    case "JuliusSansOne":
      return await import("@remotion/google-fonts/JuliusSansOne");
    case "Junge":
      return await import("@remotion/google-fonts/Junge");
    case "Jura":
      return await import("@remotion/google-fonts/Jura");
    case "JustAnotherHand":
      return await import("@remotion/google-fonts/JustAnotherHand");
    case "JustMeAgainDownHere":
      return await import("@remotion/google-fonts/JustMeAgainDownHere");
    case "K2D":
      return await import("@remotion/google-fonts/K2D");
    case "Kadwa":
      return await import("@remotion/google-fonts/Kadwa");
    case "KaiseiDecol":
      return await import("@remotion/google-fonts/KaiseiDecol");
    case "KaiseiHarunoUmi":
      return await import("@remotion/google-fonts/KaiseiHarunoUmi");
    case "KaiseiOpti":
      return await import("@remotion/google-fonts/KaiseiOpti");
    case "KaiseiTokumin":
      return await import("@remotion/google-fonts/KaiseiTokumin");
    case "Kalam":
      return await import("@remotion/google-fonts/Kalam");
    case "Kameron":
      return await import("@remotion/google-fonts/Kameron");
    case "Kanit":
      return await import("@remotion/google-fonts/Kanit");
    case "KantumruyPro":
      return await import("@remotion/google-fonts/KantumruyPro");
    case "Karantina":
      return await import("@remotion/google-fonts/Karantina");
    case "Karla":
      return await import("@remotion/google-fonts/Karla");
    case "Karma":
      return await import("@remotion/google-fonts/Karma");
    case "Katibeh":
      return await import("@remotion/google-fonts/Katibeh");
    case "KaushanScript":
      return await import("@remotion/google-fonts/KaushanScript");
    case "Kavivanar":
      return await import("@remotion/google-fonts/Kavivanar");
    case "Kavoon":
      return await import("@remotion/google-fonts/Kavoon");
    case "KdamThmorPro":
      return await import("@remotion/google-fonts/KdamThmorPro");
    case "KeaniaOne":
      return await import("@remotion/google-fonts/KeaniaOne");
    case "KellySlab":
      return await import("@remotion/google-fonts/KellySlab");
    case "Kenia":
      return await import("@remotion/google-fonts/Kenia");
    case "Khand":
      return await import("@remotion/google-fonts/Khand");
    case "Khmer":
      return await import("@remotion/google-fonts/Khmer");
    case "Khula":
      return await import("@remotion/google-fonts/Khula");
    case "Kings":
      return await import("@remotion/google-fonts/Kings");
    case "KirangHaerang":
      return await import("@remotion/google-fonts/KirangHaerang");
    case "KiteOne":
      return await import("@remotion/google-fonts/KiteOne");
    case "KiwiMaru":
      return await import("@remotion/google-fonts/KiwiMaru");
    case "KleeOne":
      return await import("@remotion/google-fonts/KleeOne");
    case "Knewave":
      return await import("@remotion/google-fonts/Knewave");
    case "KoHo":
      return await import("@remotion/google-fonts/KoHo");
    case "Kodchasan":
      return await import("@remotion/google-fonts/Kodchasan");
    case "KohSantepheap":
      return await import("@remotion/google-fonts/KohSantepheap");
    case "KolkerBrush":
      return await import("@remotion/google-fonts/KolkerBrush");
    case "Kosugi":
      return await import("@remotion/google-fonts/Kosugi");
    case "KosugiMaru":
      return await import("@remotion/google-fonts/KosugiMaru");
    case "KottaOne":
      return await import("@remotion/google-fonts/KottaOne");
    case "Koulen":
      return await import("@remotion/google-fonts/Koulen");
    case "Kranky":
      return await import("@remotion/google-fonts/Kranky");
    case "Kreon":
      return await import("@remotion/google-fonts/Kreon");
    case "Kristi":
      return await import("@remotion/google-fonts/Kristi");
    case "KronaOne":
      return await import("@remotion/google-fonts/KronaOne");
    case "Krub":
      return await import("@remotion/google-fonts/Krub");
    case "Kufam":
      return await import("@remotion/google-fonts/Kufam");
    case "KulimPark":
      return await import("@remotion/google-fonts/KulimPark");
    case "KumarOne":
      return await import("@remotion/google-fonts/KumarOne");
    case "KumarOneOutline":
      return await import("@remotion/google-fonts/KumarOneOutline");
    case "KumbhSans":
      return await import("@remotion/google-fonts/KumbhSans");
    case "Kurale":
      return await import("@remotion/google-fonts/Kurale");
    case "LaBelleAurore":
      return await import("@remotion/google-fonts/LaBelleAurore");
    case "Lacquer":
      return await import("@remotion/google-fonts/Lacquer");
    case "Laila":
      return await import("@remotion/google-fonts/Laila");
    case "LakkiReddy":
      return await import("@remotion/google-fonts/LakkiReddy");
    case "Lalezar":
      return await import("@remotion/google-fonts/Lalezar");
    case "Lancelot":
      return await import("@remotion/google-fonts/Lancelot");
    case "Langar":
      return await import("@remotion/google-fonts/Langar");
    case "Lateef":
      return await import("@remotion/google-fonts/Lateef");
    case "Lato":
      return await import("@remotion/google-fonts/Lato");
    case "LavishlyYours":
      return await import("@remotion/google-fonts/LavishlyYours");
    case "LeagueGothic":
      return await import("@remotion/google-fonts/LeagueGothic");
    case "LeagueScript":
      return await import("@remotion/google-fonts/LeagueScript");
    case "LeagueSpartan":
      return await import("@remotion/google-fonts/LeagueSpartan");
    case "LeckerliOne":
      return await import("@remotion/google-fonts/LeckerliOne");
    case "Ledger":
      return await import("@remotion/google-fonts/Ledger");
    case "Lekton":
      return await import("@remotion/google-fonts/Lekton");
    case "Lemon":
      return await import("@remotion/google-fonts/Lemon");
    case "Lemonada":
      return await import("@remotion/google-fonts/Lemonada");
    case "Lexend":
      return await import("@remotion/google-fonts/Lexend");
    case "LexendDeca":
      return await import("@remotion/google-fonts/LexendDeca");
    case "LexendExa":
      return await import("@remotion/google-fonts/LexendExa");
    case "LexendGiga":
      return await import("@remotion/google-fonts/LexendGiga");
    case "LexendMega":
      return await import("@remotion/google-fonts/LexendMega");
    case "LexendPeta":
      return await import("@remotion/google-fonts/LexendPeta");
    case "LexendTera":
      return await import("@remotion/google-fonts/LexendTera");
    case "LexendZetta":
      return await import("@remotion/google-fonts/LexendZetta");
    case "LibreBarcode128":
      return await import("@remotion/google-fonts/LibreBarcode128");
    case "LibreBarcode128Text":
      return await import("@remotion/google-fonts/LibreBarcode128Text");
    case "LibreBarcode39":
      return await import("@remotion/google-fonts/LibreBarcode39");
    case "LibreBarcode39Extended":
      return await import("@remotion/google-fonts/LibreBarcode39Extended");
    case "LibreBarcode39ExtendedText":
      return await import("@remotion/google-fonts/LibreBarcode39ExtendedText");
    case "LibreBarcode39Text":
      return await import("@remotion/google-fonts/LibreBarcode39Text");
    case "LibreBarcodeEAN13Text":
      return await import("@remotion/google-fonts/LibreBarcodeEAN13Text");
    case "LibreBaskerville":
      return await import("@remotion/google-fonts/LibreBaskerville");
    case "LibreBodoni":
      return await import("@remotion/google-fonts/LibreBodoni");
    case "LibreCaslonDisplay":
      return await import("@remotion/google-fonts/LibreCaslonDisplay");
    case "LibreCaslonText":
      return await import("@remotion/google-fonts/LibreCaslonText");
    case "LibreFranklin":
      return await import("@remotion/google-fonts/LibreFranklin");
    case "Licorice":
      return await import("@remotion/google-fonts/Licorice");
    case "LifeSavers":
      return await import("@remotion/google-fonts/LifeSavers");
    case "LilitaOne":
      return await import("@remotion/google-fonts/LilitaOne");
    case "LilyScriptOne":
      return await import("@remotion/google-fonts/LilyScriptOne");
    case "Limelight":
      return await import("@remotion/google-fonts/Limelight");
    case "LindenHill":
      return await import("@remotion/google-fonts/LindenHill");
    case "Literata":
      return await import("@remotion/google-fonts/Literata");
    case "LiuJianMaoCao":
      return await import("@remotion/google-fonts/LiuJianMaoCao");
    case "Livvic":
      return await import("@remotion/google-fonts/Livvic");
    case "Lobster":
      return await import("@remotion/google-fonts/Lobster");
    case "LobsterTwo":
      return await import("@remotion/google-fonts/LobsterTwo");
    case "LondrinaOutline":
      return await import("@remotion/google-fonts/LondrinaOutline");
    case "LondrinaShadow":
      return await import("@remotion/google-fonts/LondrinaShadow");
    case "LondrinaSketch":
      return await import("@remotion/google-fonts/LondrinaSketch");
    case "LondrinaSolid":
      return await import("@remotion/google-fonts/LondrinaSolid");
    case "LongCang":
      return await import("@remotion/google-fonts/LongCang");
    case "Lora":
      return await import("@remotion/google-fonts/Lora");
    case "LoveLight":
      return await import("@remotion/google-fonts/LoveLight");
    case "LoveYaLikeASister":
      return await import("@remotion/google-fonts/LoveYaLikeASister");
    case "LovedbytheKing":
      return await import("@remotion/google-fonts/LovedbytheKing");
    case "LoversQuarrel":
      return await import("@remotion/google-fonts/LoversQuarrel");
    case "LuckiestGuy":
      return await import("@remotion/google-fonts/LuckiestGuy");
    case "Lusitana":
      return await import("@remotion/google-fonts/Lusitana");
    case "Lustria":
      return await import("@remotion/google-fonts/Lustria");
    case "LuxuriousRoman":
      return await import("@remotion/google-fonts/LuxuriousRoman");
    case "LuxuriousScript":
      return await import("@remotion/google-fonts/LuxuriousScript");
    case "MPLUS1":
      return await import("@remotion/google-fonts/MPLUS1");
    case "MPLUS1Code":
      return await import("@remotion/google-fonts/MPLUS1Code");
    case "MPLUS1p":
      return await import("@remotion/google-fonts/MPLUS1p");
    case "MPLUS2":
      return await import("@remotion/google-fonts/MPLUS2");
    case "MPLUSCodeLatin":
      return await import("@remotion/google-fonts/MPLUSCodeLatin");
    case "MPLUSRounded1c":
      return await import("@remotion/google-fonts/MPLUSRounded1c");
    case "MaShanZheng":
      return await import("@remotion/google-fonts/MaShanZheng");
    case "Macondo":
      return await import("@remotion/google-fonts/Macondo");
    case "MacondoSwashCaps":
      return await import("@remotion/google-fonts/MacondoSwashCaps");
    case "Mada":
      return await import("@remotion/google-fonts/Mada");
    case "Magra":
      return await import("@remotion/google-fonts/Magra");
    case "MaidenOrange":
      return await import("@remotion/google-fonts/MaidenOrange");
    case "Maitree":
      return await import("@remotion/google-fonts/Maitree");
    case "MajorMonoDisplay":
      return await import("@remotion/google-fonts/MajorMonoDisplay");
    case "Mako":
      return await import("@remotion/google-fonts/Mako");
    case "Mali":
      return await import("@remotion/google-fonts/Mali");
    case "Mallanna":
      return await import("@remotion/google-fonts/Mallanna");
    case "Mandali":
      return await import("@remotion/google-fonts/Mandali");
    case "Manjari":
      return await import("@remotion/google-fonts/Manjari");
    case "Manrope":
      return await import("@remotion/google-fonts/Manrope");
    case "Mansalva":
      return await import("@remotion/google-fonts/Mansalva");
    case "Manuale":
      return await import("@remotion/google-fonts/Manuale");
    case "Marcellus":
      return await import("@remotion/google-fonts/Marcellus");
    case "MarcellusSC":
      return await import("@remotion/google-fonts/MarcellusSC");
    case "MarckScript":
      return await import("@remotion/google-fonts/MarckScript");
    case "Margarine":
      return await import("@remotion/google-fonts/Margarine");
    case "MarkaziText":
      return await import("@remotion/google-fonts/MarkaziText");
    case "MarkoOne":
      return await import("@remotion/google-fonts/MarkoOne");
    case "Marmelad":
      return await import("@remotion/google-fonts/Marmelad");
    case "Martel":
      return await import("@remotion/google-fonts/Martel");
    case "MartelSans":
      return await import("@remotion/google-fonts/MartelSans");
    case "Marvel":
      return await import("@remotion/google-fonts/Marvel");
    case "Mate":
      return await import("@remotion/google-fonts/Mate");
    case "MateSC":
      return await import("@remotion/google-fonts/MateSC");
    case "MavenPro":
      return await import("@remotion/google-fonts/MavenPro");
    case "McLaren":
      return await import("@remotion/google-fonts/McLaren");
    case "MeaCulpa":
      return await import("@remotion/google-fonts/MeaCulpa");
    case "Meddon":
      return await import("@remotion/google-fonts/Meddon");
    case "MedievalSharp":
      return await import("@remotion/google-fonts/MedievalSharp");
    case "MedulaOne":
      return await import("@remotion/google-fonts/MedulaOne");
    case "MeeraInimai":
      return await import("@remotion/google-fonts/MeeraInimai");
    case "Megrim":
      return await import("@remotion/google-fonts/Megrim");
    case "MeieScript":
      return await import("@remotion/google-fonts/MeieScript");
    case "MeowScript":
      return await import("@remotion/google-fonts/MeowScript");
    case "Merienda":
      return await import("@remotion/google-fonts/Merienda");

    case "Merriweather":
      return await import("@remotion/google-fonts/Merriweather");
    case "MerriweatherSans":
      return await import("@remotion/google-fonts/MerriweatherSans");
    case "Metal":
      return await import("@remotion/google-fonts/Metal");
    case "MetalMania":
      return await import("@remotion/google-fonts/MetalMania");
    case "Metamorphous":
      return await import("@remotion/google-fonts/Metamorphous");
    case "Metrophobic":
      return await import("@remotion/google-fonts/Metrophobic");
    case "Michroma":
      return await import("@remotion/google-fonts/Michroma");
    case "Milonga":
      return await import("@remotion/google-fonts/Milonga");
    case "Miltonian":
      return await import("@remotion/google-fonts/Miltonian");
    case "MiltonianTattoo":
      return await import("@remotion/google-fonts/MiltonianTattoo");
    case "Mina":
      return await import("@remotion/google-fonts/Mina");
    case "Mingzat":
      return await import("@remotion/google-fonts/Mingzat");
    case "Miniver":
      return await import("@remotion/google-fonts/Miniver");
    case "MiriamLibre":
      return await import("@remotion/google-fonts/MiriamLibre");
    case "Mirza":
      return await import("@remotion/google-fonts/Mirza");
    case "MissFajardose":
      return await import("@remotion/google-fonts/MissFajardose");
    case "Mitr":
      return await import("@remotion/google-fonts/Mitr");
    case "MochiyPopOne":
      return await import("@remotion/google-fonts/MochiyPopOne");
    case "MochiyPopPOne":
      return await import("@remotion/google-fonts/MochiyPopPOne");
    case "Modak":
      return await import("@remotion/google-fonts/Modak");
    case "ModernAntiqua":
      return await import("@remotion/google-fonts/ModernAntiqua");
    case "Mogra":
      return await import("@remotion/google-fonts/Mogra");
    case "Mohave":
      return await import("@remotion/google-fonts/Mohave");
    case "Molengo":
      return await import("@remotion/google-fonts/Molengo");
    case "Molle":
      return await import("@remotion/google-fonts/Molle");
    case "Monda":
      return await import("@remotion/google-fonts/Monda");
    case "Monofett":
      return await import("@remotion/google-fonts/Monofett");
    case "Monoton":
      return await import("@remotion/google-fonts/Monoton");
    case "MonsieurLaDoulaise":
      return await import("@remotion/google-fonts/MonsieurLaDoulaise");
    case "Montaga":
      return await import("@remotion/google-fonts/Montaga");
    case "MontaguSlab":
      return await import("@remotion/google-fonts/MontaguSlab");
    case "MonteCarlo":
      return await import("@remotion/google-fonts/MonteCarlo");
    case "Montez":
      return await import("@remotion/google-fonts/Montez");
    case "Montserrat":
      return await import("@remotion/google-fonts/Montserrat");
    case "MontserratAlternates":
      return await import("@remotion/google-fonts/MontserratAlternates");
    case "MontserratSubrayada":
      return await import("@remotion/google-fonts/MontserratSubrayada");
    case "MooLahLah":
      return await import("@remotion/google-fonts/MooLahLah");
    case "MoonDance":
      return await import("@remotion/google-fonts/MoonDance");
    case "Moul":
      return await import("@remotion/google-fonts/Moul");
    case "Moulpali":
      return await import("@remotion/google-fonts/Moulpali");
    case "MountainsofChristmas":
      return await import("@remotion/google-fonts/MountainsofChristmas");
    case "MouseMemoirs":
      return await import("@remotion/google-fonts/MouseMemoirs");
    case "MrBedfort":
      return await import("@remotion/google-fonts/MrBedfort");
    case "MrDafoe":
      return await import("@remotion/google-fonts/MrDafoe");
    case "MrDeHaviland":
      return await import("@remotion/google-fonts/MrDeHaviland");
    case "MrsSaintDelafield":
      return await import("@remotion/google-fonts/MrsSaintDelafield");
    case "MrsSheppards":
      return await import("@remotion/google-fonts/MrsSheppards");
    case "MsMadi":
      return await import("@remotion/google-fonts/MsMadi");
    case "Mukta":
      return await import("@remotion/google-fonts/Mukta");
    case "MuktaMahee":
      return await import("@remotion/google-fonts/MuktaMahee");
    case "MuktaMalar":
      return await import("@remotion/google-fonts/MuktaMalar");
    case "MuktaVaani":
      return await import("@remotion/google-fonts/MuktaVaani");
    case "Mulish":
      return await import("@remotion/google-fonts/Mulish");
    case "Murecho":
      return await import("@remotion/google-fonts/Murecho");
    case "MuseoModerno":
      return await import("@remotion/google-fonts/MuseoModerno");
    case "MySoul":
      return await import("@remotion/google-fonts/MySoul");
    case "MysteryQuest":
      return await import("@remotion/google-fonts/MysteryQuest");
    case "NTR":
      return await import("@remotion/google-fonts/NTR");
    case "Nabla":
      return await import("@remotion/google-fonts/Nabla");
    case "NanumBrushScript":
      return await import("@remotion/google-fonts/NanumBrushScript");
    case "NanumGothic":
      return await import("@remotion/google-fonts/NanumGothic");
    case "NanumGothicCoding":
      return await import("@remotion/google-fonts/NanumGothicCoding");
    case "NanumMyeongjo":
      return await import("@remotion/google-fonts/NanumMyeongjo");
    case "NanumPenScript":
      return await import("@remotion/google-fonts/NanumPenScript");
    case "Neonderthaw":
      return await import("@remotion/google-fonts/Neonderthaw");
    case "NerkoOne":
      return await import("@remotion/google-fonts/NerkoOne");
    case "Neucha":
      return await import("@remotion/google-fonts/Neucha");
    case "Neuton":
      return await import("@remotion/google-fonts/Neuton");
    case "NewRocker":
      return await import("@remotion/google-fonts/NewRocker");
    case "NewTegomin":
      return await import("@remotion/google-fonts/NewTegomin");
    case "NewsCycle":
      return await import("@remotion/google-fonts/NewsCycle");
    case "Newsreader":
      return await import("@remotion/google-fonts/Newsreader");
    case "Niconne":
      return await import("@remotion/google-fonts/Niconne");
    case "Niramit":
      return await import("@remotion/google-fonts/Niramit");
    case "NixieOne":
      return await import("@remotion/google-fonts/NixieOne");
    case "Nobile":
      return await import("@remotion/google-fonts/Nobile");
    case "Nokora":
      return await import("@remotion/google-fonts/Nokora");
    case "Norican":
      return await import("@remotion/google-fonts/Norican");
    case "Nosifer":
      return await import("@remotion/google-fonts/Nosifer");
    case "Notable":
      return await import("@remotion/google-fonts/Notable");
    case "NothingYouCouldDo":
      return await import("@remotion/google-fonts/NothingYouCouldDo");
    case "NoticiaText":
      return await import("@remotion/google-fonts/NoticiaText");
    case "NotoColorEmoji":
      return await import("@remotion/google-fonts/NotoColorEmoji");
    case "NotoEmoji":
      return await import("@remotion/google-fonts/NotoEmoji");
    case "NotoKufiArabic":
      return await import("@remotion/google-fonts/NotoKufiArabic");
    case "NotoMusic":
      return await import("@remotion/google-fonts/NotoMusic");
    case "NotoNaskhArabic":
      return await import("@remotion/google-fonts/NotoNaskhArabic");
    case "NotoNastaliqUrdu":
      return await import("@remotion/google-fonts/NotoNastaliqUrdu");
    case "NotoRashiHebrew":
      return await import("@remotion/google-fonts/NotoRashiHebrew");
    case "NotoSans":
      return await import("@remotion/google-fonts/NotoSans");
    case "NotoSansAdlam":
      return await import("@remotion/google-fonts/NotoSansAdlam");
    case "NotoSansAdlamUnjoined":
      return await import("@remotion/google-fonts/NotoSansAdlamUnjoined");
    case "NotoSansAnatolianHieroglyphs":
      return await import(
        "@remotion/google-fonts/NotoSansAnatolianHieroglyphs"
      );
    case "NotoSansArabic":
      return await import("@remotion/google-fonts/NotoSansArabic");
    case "NotoSansArmenian":
      return await import("@remotion/google-fonts/NotoSansArmenian");
    case "NotoSansAvestan":
      return await import("@remotion/google-fonts/NotoSansAvestan");
    case "NotoSansBalinese":
      return await import("@remotion/google-fonts/NotoSansBalinese");
    case "NotoSansBamum":
      return await import("@remotion/google-fonts/NotoSansBamum");
    case "NotoSansBassaVah":
      return await import("@remotion/google-fonts/NotoSansBassaVah");
    case "NotoSansBatak":
      return await import("@remotion/google-fonts/NotoSansBatak");
    case "NotoSansBengali":
      return await import("@remotion/google-fonts/NotoSansBengali");
    case "NotoSansBhaiksuki":
      return await import("@remotion/google-fonts/NotoSansBhaiksuki");
    case "NotoSansBrahmi":
      return await import("@remotion/google-fonts/NotoSansBrahmi");
    case "NotoSansBuginese":
      return await import("@remotion/google-fonts/NotoSansBuginese");
    case "NotoSansBuhid":
      return await import("@remotion/google-fonts/NotoSansBuhid");
    case "NotoSansCanadianAboriginal":
      return await import("@remotion/google-fonts/NotoSansCanadianAboriginal");
    case "NotoSansCarian":
      return await import("@remotion/google-fonts/NotoSansCarian");
    case "NotoSansCaucasianAlbanian":
      return await import("@remotion/google-fonts/NotoSansCaucasianAlbanian");
    case "NotoSansChakma":
      return await import("@remotion/google-fonts/NotoSansChakma");
    case "NotoSansCham":
      return await import("@remotion/google-fonts/NotoSansCham");
    case "NotoSansCherokee":
      return await import("@remotion/google-fonts/NotoSansCherokee");
    case "NotoSansCoptic":
      return await import("@remotion/google-fonts/NotoSansCoptic");
    case "NotoSansCuneiform":
      return await import("@remotion/google-fonts/NotoSansCuneiform");
    case "NotoSansCypriot":
      return await import("@remotion/google-fonts/NotoSansCypriot");
    case "NotoSansDeseret":
      return await import("@remotion/google-fonts/NotoSansDeseret");
    case "NotoSansDevanagari":
      return await import("@remotion/google-fonts/NotoSansDevanagari");
    case "NotoSansDisplay":
      return await import("@remotion/google-fonts/NotoSansDisplay");
    case "NotoSansDuployan":
      return await import("@remotion/google-fonts/NotoSansDuployan");
    case "NotoSansEgyptianHieroglyphs":
      return await import("@remotion/google-fonts/NotoSansEgyptianHieroglyphs");
    case "NotoSansElbasan":
      return await import("@remotion/google-fonts/NotoSansElbasan");
    case "NotoSansElymaic":
      return await import("@remotion/google-fonts/NotoSansElymaic");
    case "NotoSansEthiopic":
      return await import("@remotion/google-fonts/NotoSansEthiopic");
    case "NotoSansGeorgian":
      return await import("@remotion/google-fonts/NotoSansGeorgian");
    case "NotoSansGlagolitic":
      return await import("@remotion/google-fonts/NotoSansGlagolitic");
    case "NotoSansGothic":
      return await import("@remotion/google-fonts/NotoSansGothic");
    case "NotoSansGrantha":
      return await import("@remotion/google-fonts/NotoSansGrantha");
    case "NotoSansGujarati":
      return await import("@remotion/google-fonts/NotoSansGujarati");
    case "NotoSansGunjalaGondi":
      return await import("@remotion/google-fonts/NotoSansGunjalaGondi");
    case "NotoSansGurmukhi":
      return await import("@remotion/google-fonts/NotoSansGurmukhi");
    case "NotoSansHK":
      return await import("@remotion/google-fonts/NotoSansHK");
    case "NotoSansHanifiRohingya":
      return await import("@remotion/google-fonts/NotoSansHanifiRohingya");
    case "NotoSansHanunoo":
      return await import("@remotion/google-fonts/NotoSansHanunoo");
    case "NotoSansHatran":
      return await import("@remotion/google-fonts/NotoSansHatran");
    case "NotoSansHebrew":
      return await import("@remotion/google-fonts/NotoSansHebrew");
    case "NotoSansImperialAramaic":
      return await import("@remotion/google-fonts/NotoSansImperialAramaic");
    case "NotoSansIndicSiyaqNumbers":
      return await import("@remotion/google-fonts/NotoSansIndicSiyaqNumbers");
    case "NotoSansInscriptionalPahlavi":
      return await import(
        "@remotion/google-fonts/NotoSansInscriptionalPahlavi"
      );
    case "NotoSansInscriptionalParthian":
      return await import(
        "@remotion/google-fonts/NotoSansInscriptionalParthian"
      );
    case "NotoSansJP":
      return await import("@remotion/google-fonts/NotoSansJP");
    case "NotoSansJavanese":
      return await import("@remotion/google-fonts/NotoSansJavanese");
    case "NotoSansKR":
      return await import("@remotion/google-fonts/NotoSansKR");
    case "NotoSansKaithi":
      return await import("@remotion/google-fonts/NotoSansKaithi");
    case "NotoSansKannada":
      return await import("@remotion/google-fonts/NotoSansKannada");
    case "NotoSansKayahLi":
      return await import("@remotion/google-fonts/NotoSansKayahLi");
    case "NotoSansKharoshthi":
      return await import("@remotion/google-fonts/NotoSansKharoshthi");
    case "NotoSansKhmer":
      return await import("@remotion/google-fonts/NotoSansKhmer");
    case "NotoSansKhojki":
      return await import("@remotion/google-fonts/NotoSansKhojki");
    case "NotoSansKhudawadi":
      return await import("@remotion/google-fonts/NotoSansKhudawadi");
    case "NotoSansLao":
      return await import("@remotion/google-fonts/NotoSansLao");
    case "NotoSansLepcha":
      return await import("@remotion/google-fonts/NotoSansLepcha");
    case "NotoSansLimbu":
      return await import("@remotion/google-fonts/NotoSansLimbu");
    case "NotoSansLinearA":
      return await import("@remotion/google-fonts/NotoSansLinearA");
    case "NotoSansLinearB":
      return await import("@remotion/google-fonts/NotoSansLinearB");
    case "NotoSansLisu":
      return await import("@remotion/google-fonts/NotoSansLisu");
    case "NotoSansLycian":
      return await import("@remotion/google-fonts/NotoSansLycian");
    case "NotoSansLydian":
      return await import("@remotion/google-fonts/NotoSansLydian");
    case "NotoSansMahajani":
      return await import("@remotion/google-fonts/NotoSansMahajani");
    case "NotoSansMalayalam":
      return await import("@remotion/google-fonts/NotoSansMalayalam");
    case "NotoSansMandaic":
      return await import("@remotion/google-fonts/NotoSansMandaic");
    case "NotoSansManichaean":
      return await import("@remotion/google-fonts/NotoSansManichaean");
    case "NotoSansMarchen":
      return await import("@remotion/google-fonts/NotoSansMarchen");
    case "NotoSansMasaramGondi":
      return await import("@remotion/google-fonts/NotoSansMasaramGondi");
    case "NotoSansMath":
      return await import("@remotion/google-fonts/NotoSansMath");
    case "NotoSansMayanNumerals":
      return await import("@remotion/google-fonts/NotoSansMayanNumerals");
    case "NotoSansMedefaidrin":
      return await import("@remotion/google-fonts/NotoSansMedefaidrin");
    case "NotoSansMeeteiMayek":
      return await import("@remotion/google-fonts/NotoSansMeeteiMayek");
    case "NotoSansMeroitic":
      return await import("@remotion/google-fonts/NotoSansMeroitic");
    case "NotoSansMiao":
      return await import("@remotion/google-fonts/NotoSansMiao");
    case "NotoSansModi":
      return await import("@remotion/google-fonts/NotoSansModi");
    case "NotoSansMongolian":
      return await import("@remotion/google-fonts/NotoSansMongolian");
    case "NotoSansMono":
      return await import("@remotion/google-fonts/NotoSansMono");
    case "NotoSansMro":
      return await import("@remotion/google-fonts/NotoSansMro");
    case "NotoSansMultani":
      return await import("@remotion/google-fonts/NotoSansMultani");
    case "NotoSansMyanmar":
      return await import("@remotion/google-fonts/NotoSansMyanmar");
    case "NotoSansNKo":
      return await import("@remotion/google-fonts/NotoSansNKo");
    case "NotoSansNabataean":
      return await import("@remotion/google-fonts/NotoSansNabataean");
    case "NotoSansNewTaiLue":
      return await import("@remotion/google-fonts/NotoSansNewTaiLue");
    case "NotoSansNewa":
      return await import("@remotion/google-fonts/NotoSansNewa");
    case "NotoSansNushu":
      return await import("@remotion/google-fonts/NotoSansNushu");
    case "NotoSansOgham":
      return await import("@remotion/google-fonts/NotoSansOgham");
    case "NotoSansOlChiki":
      return await import("@remotion/google-fonts/NotoSansOlChiki");
    case "NotoSansOldHungarian":
      return await import("@remotion/google-fonts/NotoSansOldHungarian");
    case "NotoSansOldItalic":
      return await import("@remotion/google-fonts/NotoSansOldItalic");
    case "NotoSansOldNorthArabian":
      return await import("@remotion/google-fonts/NotoSansOldNorthArabian");
    case "NotoSansOldPermic":
      return await import("@remotion/google-fonts/NotoSansOldPermic");
    case "NotoSansOldPersian":
      return await import("@remotion/google-fonts/NotoSansOldPersian");
    case "NotoSansOldSogdian":
      return await import("@remotion/google-fonts/NotoSansOldSogdian");
    case "NotoSansOldSouthArabian":
      return await import("@remotion/google-fonts/NotoSansOldSouthArabian");
    case "NotoSansOldTurkic":
      return await import("@remotion/google-fonts/NotoSansOldTurkic");
    case "NotoSansOriya":
      return await import("@remotion/google-fonts/NotoSansOriya");
    case "NotoSansOsage":
      return await import("@remotion/google-fonts/NotoSansOsage");
    case "NotoSansOsmanya":
      return await import("@remotion/google-fonts/NotoSansOsmanya");
    case "NotoSansPahawhHmong":
      return await import("@remotion/google-fonts/NotoSansPahawhHmong");
    case "NotoSansPalmyrene":
      return await import("@remotion/google-fonts/NotoSansPalmyrene");
    case "NotoSansPauCinHau":
      return await import("@remotion/google-fonts/NotoSansPauCinHau");
    case "NotoSansPhagsPa":
      return await import("@remotion/google-fonts/NotoSansPhagsPa");
    case "NotoSansPhoenician":
      return await import("@remotion/google-fonts/NotoSansPhoenician");
    case "NotoSansPsalterPahlavi":
      return await import("@remotion/google-fonts/NotoSansPsalterPahlavi");
    case "NotoSansRejang":
      return await import("@remotion/google-fonts/NotoSansRejang");
    case "NotoSansRunic":
      return await import("@remotion/google-fonts/NotoSansRunic");
    case "NotoSansSC":
      return await import("@remotion/google-fonts/NotoSansSC");
    case "NotoSansSamaritan":
      return await import("@remotion/google-fonts/NotoSansSamaritan");
    case "NotoSansSaurashtra":
      return await import("@remotion/google-fonts/NotoSansSaurashtra");
    case "NotoSansSharada":
      return await import("@remotion/google-fonts/NotoSansSharada");
    case "NotoSansShavian":
      return await import("@remotion/google-fonts/NotoSansShavian");
    case "NotoSansSiddham":
      return await import("@remotion/google-fonts/NotoSansSiddham");
    case "NotoSansSinhala":
      return await import("@remotion/google-fonts/NotoSansSinhala");
    case "NotoSansSogdian":
      return await import("@remotion/google-fonts/NotoSansSogdian");
    case "NotoSansSoraSompeng":
      return await import("@remotion/google-fonts/NotoSansSoraSompeng");
    case "NotoSansSoyombo":
      return await import("@remotion/google-fonts/NotoSansSoyombo");
    case "NotoSansSundanese":
      return await import("@remotion/google-fonts/NotoSansSundanese");
    case "NotoSansSylotiNagri":
      return await import("@remotion/google-fonts/NotoSansSylotiNagri");
    case "NotoSansSymbols":
      return await import("@remotion/google-fonts/NotoSansSymbols");
    case "NotoSansSymbols2":
      return await import("@remotion/google-fonts/NotoSansSymbols2");
    case "NotoSansSyriac":
      return await import("@remotion/google-fonts/NotoSansSyriac");
    case "NotoSansTC":
      return await import("@remotion/google-fonts/NotoSansTC");
    case "NotoSansTagalog":
      return await import("@remotion/google-fonts/NotoSansTagalog");
    case "NotoSansTagbanwa":
      return await import("@remotion/google-fonts/NotoSansTagbanwa");
    case "NotoSansTaiLe":
      return await import("@remotion/google-fonts/NotoSansTaiLe");
    case "NotoSansTaiTham":
      return await import("@remotion/google-fonts/NotoSansTaiTham");
    case "NotoSansTaiViet":
      return await import("@remotion/google-fonts/NotoSansTaiViet");
    case "NotoSansTakri":
      return await import("@remotion/google-fonts/NotoSansTakri");
    case "NotoSansTamil":
      return await import("@remotion/google-fonts/NotoSansTamil");
    case "NotoSansTamilSupplement":
      return await import("@remotion/google-fonts/NotoSansTamilSupplement");
    case "NotoSansTelugu":
      return await import("@remotion/google-fonts/NotoSansTelugu");
    case "NotoSansThaana":
      return await import("@remotion/google-fonts/NotoSansThaana");
    case "NotoSansThai":
      return await import("@remotion/google-fonts/NotoSansThai");
    case "NotoSansThaiLooped":
      return await import("@remotion/google-fonts/NotoSansThaiLooped");
    case "NotoSansTifinagh":
      return await import("@remotion/google-fonts/NotoSansTifinagh");
    case "NotoSansTirhuta":
      return await import("@remotion/google-fonts/NotoSansTirhuta");
    case "NotoSansUgaritic":
      return await import("@remotion/google-fonts/NotoSansUgaritic");
    case "NotoSansVai":
      return await import("@remotion/google-fonts/NotoSansVai");
    case "NotoSansWancho":
      return await import("@remotion/google-fonts/NotoSansWancho");
    case "NotoSansWarangCiti":
      return await import("@remotion/google-fonts/NotoSansWarangCiti");
    case "NotoSansYi":
      return await import("@remotion/google-fonts/NotoSansYi");
    case "NotoSansZanabazarSquare":
      return await import("@remotion/google-fonts/NotoSansZanabazarSquare");
    case "NotoSerif":
      return await import("@remotion/google-fonts/NotoSerif");
    case "NotoSerifAhom":
      return await import("@remotion/google-fonts/NotoSerifAhom");
    case "NotoSerifArmenian":
      return await import("@remotion/google-fonts/NotoSerifArmenian");
    case "NotoSerifBalinese":
      return await import("@remotion/google-fonts/NotoSerifBalinese");
    case "NotoSerifBengali":
      return await import("@remotion/google-fonts/NotoSerifBengali");
    case "NotoSerifDevanagari":
      return await import("@remotion/google-fonts/NotoSerifDevanagari");
    case "NotoSerifDisplay":
      return await import("@remotion/google-fonts/NotoSerifDisplay");
    case "NotoSerifDogra":
      return await import("@remotion/google-fonts/NotoSerifDogra");
    case "NotoSerifEthiopic":
      return await import("@remotion/google-fonts/NotoSerifEthiopic");
    case "NotoSerifGeorgian":
      return await import("@remotion/google-fonts/NotoSerifGeorgian");
    case "NotoSerifGrantha":
      return await import("@remotion/google-fonts/NotoSerifGrantha");
    case "NotoSerifGujarati":
      return await import("@remotion/google-fonts/NotoSerifGujarati");
    case "NotoSerifGurmukhi":
      return await import("@remotion/google-fonts/NotoSerifGurmukhi");
    case "NotoSerifHK":
      return await import("@remotion/google-fonts/NotoSerifHK");
    case "NotoSerifHebrew":
      return await import("@remotion/google-fonts/NotoSerifHebrew");
    case "NotoSerifJP":
      return await import("@remotion/google-fonts/NotoSerifJP");
    case "NotoSerifKR":
      return await import("@remotion/google-fonts/NotoSerifKR");
    case "NotoSerifKannada":
      return await import("@remotion/google-fonts/NotoSerifKannada");
    case "NotoSerifKhmer":
      return await import("@remotion/google-fonts/NotoSerifKhmer");
    case "NotoSerifLao":
      return await import("@remotion/google-fonts/NotoSerifLao");
    case "NotoSerifMalayalam":
      return await import("@remotion/google-fonts/NotoSerifMalayalam");
    case "NotoSerifMyanmar":
      return await import("@remotion/google-fonts/NotoSerifMyanmar");
    case "NotoSerifSC":
      return await import("@remotion/google-fonts/NotoSerifSC");
    case "NotoSerifSinhala":
      return await import("@remotion/google-fonts/NotoSerifSinhala");
    case "NotoSerifTC":
      return await import("@remotion/google-fonts/NotoSerifTC");
    case "NotoSerifTamil":
      return await import("@remotion/google-fonts/NotoSerifTamil");
    case "NotoSerifTangut":
      return await import("@remotion/google-fonts/NotoSerifTangut");
    case "NotoSerifTelugu":
      return await import("@remotion/google-fonts/NotoSerifTelugu");
    case "NotoSerifThai":
      return await import("@remotion/google-fonts/NotoSerifThai");
    case "NotoSerifTibetan":
      return await import("@remotion/google-fonts/NotoSerifTibetan");
    case "NotoSerifYezidi":
      return await import("@remotion/google-fonts/NotoSerifYezidi");
    case "NotoTraditionalNushu":
      return await import("@remotion/google-fonts/NotoTraditionalNushu");
    case "NovaCut":
      return await import("@remotion/google-fonts/NovaCut");
    case "NovaFlat":
      return await import("@remotion/google-fonts/NovaFlat");
    case "NovaMono":
      return await import("@remotion/google-fonts/NovaMono");
    case "NovaOval":
      return await import("@remotion/google-fonts/NovaOval");
    case "NovaRound":
      return await import("@remotion/google-fonts/NovaRound");
    case "NovaScript":
      return await import("@remotion/google-fonts/NovaScript");
    case "NovaSlim":
      return await import("@remotion/google-fonts/NovaSlim");
    case "NovaSquare":
      return await import("@remotion/google-fonts/NovaSquare");
    case "Numans":
      return await import("@remotion/google-fonts/Numans");
    case "Nunito":
      return await import("@remotion/google-fonts/Nunito");
    case "NunitoSans":
      return await import("@remotion/google-fonts/NunitoSans");
    case "NuosuSIL":
      return await import("@remotion/google-fonts/NuosuSIL");
    case "OdibeeSans":
      return await import("@remotion/google-fonts/OdibeeSans");
    case "OdorMeanChey":
      return await import("@remotion/google-fonts/OdorMeanChey");
    case "Offside":
      return await import("@remotion/google-fonts/Offside");
    case "Oi":
      return await import("@remotion/google-fonts/Oi");
    case "OldStandardTT":
      return await import("@remotion/google-fonts/OldStandardTT");
    case "Oldenburg":
      return await import("@remotion/google-fonts/Oldenburg");
    case "Ole":
      return await import("@remotion/google-fonts/Ole");
    case "OleoScript":
      return await import("@remotion/google-fonts/OleoScript");
    case "OleoScriptSwashCaps":
      return await import("@remotion/google-fonts/OleoScriptSwashCaps");
    case "OoohBaby":
      return await import("@remotion/google-fonts/OoohBaby");
    case "OpenSans":
      return await import("@remotion/google-fonts/OpenSans");
    case "Oranienbaum":
      return await import("@remotion/google-fonts/Oranienbaum");
    case "Orbitron":
      return await import("@remotion/google-fonts/Orbitron");
    case "Oregano":
      return await import("@remotion/google-fonts/Oregano");
    case "OrelegaOne":
      return await import("@remotion/google-fonts/OrelegaOne");
    case "Orienta":
      return await import("@remotion/google-fonts/Orienta");
    case "OriginalSurfer":
      return await import("@remotion/google-fonts/OriginalSurfer");
    case "Oswald":
      return await import("@remotion/google-fonts/Oswald");
    case "Outfit":
      return await import("@remotion/google-fonts/Outfit");
    case "OvertheRainbow":
      return await import("@remotion/google-fonts/OvertheRainbow");
    case "Overlock":
      return await import("@remotion/google-fonts/Overlock");
    case "OverlockSC":
      return await import("@remotion/google-fonts/OverlockSC");
    case "Overpass":
      return await import("@remotion/google-fonts/Overpass");
    case "OverpassMono":
      return await import("@remotion/google-fonts/OverpassMono");
    case "Ovo":
      return await import("@remotion/google-fonts/Ovo");
    case "Oxanium":
      return await import("@remotion/google-fonts/Oxanium");
    case "Oxygen":
      return await import("@remotion/google-fonts/Oxygen");
    case "OxygenMono":
      return await import("@remotion/google-fonts/OxygenMono");
    case "PTMono":
      return await import("@remotion/google-fonts/PTMono");
    case "PTSans":
      return await import("@remotion/google-fonts/PTSans");
    case "PTSansCaption":
      return await import("@remotion/google-fonts/PTSansCaption");
    case "PTSansNarrow":
      return await import("@remotion/google-fonts/PTSansNarrow");
    case "PTSerif":
      return await import("@remotion/google-fonts/PTSerif");
    case "PTSerifCaption":
      return await import("@remotion/google-fonts/PTSerifCaption");
    case "Pacifico":
      return await import("@remotion/google-fonts/Pacifico");
    case "Padauk":
      return await import("@remotion/google-fonts/Padauk");
    case "Palanquin":
      return await import("@remotion/google-fonts/Palanquin");
    case "PalanquinDark":
      return await import("@remotion/google-fonts/PalanquinDark");
    case "Pangolin":
      return await import("@remotion/google-fonts/Pangolin");
    case "Paprika":
      return await import("@remotion/google-fonts/Paprika");
    case "Parisienne":
      return await import("@remotion/google-fonts/Parisienne");
    case "PasseroOne":
      return await import("@remotion/google-fonts/PasseroOne");
    case "PassionOne":
      return await import("@remotion/google-fonts/PassionOne");
    case "PassionsConflict":
      return await import("@remotion/google-fonts/PassionsConflict");
    case "PathwayGothicOne":
      return await import("@remotion/google-fonts/PathwayGothicOne");
    case "PatrickHand":
      return await import("@remotion/google-fonts/PatrickHand");
    case "PatrickHandSC":
      return await import("@remotion/google-fonts/PatrickHandSC");
    case "Pattaya":
      return await import("@remotion/google-fonts/Pattaya");
    case "PatuaOne":
      return await import("@remotion/google-fonts/PatuaOne");
    case "Pavanam":
      return await import("@remotion/google-fonts/Pavanam");
    case "PaytoneOne":
      return await import("@remotion/google-fonts/PaytoneOne");
    case "Peddana":
      return await import("@remotion/google-fonts/Peddana");
    case "Peralta":
      return await import("@remotion/google-fonts/Peralta");
    case "PermanentMarker":
      return await import("@remotion/google-fonts/PermanentMarker");
    case "Petemoss":
      return await import("@remotion/google-fonts/Petemoss");
    case "PetitFormalScript":
      return await import("@remotion/google-fonts/PetitFormalScript");
    case "Petrona":
      return await import("@remotion/google-fonts/Petrona");
    case "Philosopher":
      return await import("@remotion/google-fonts/Philosopher");
    case "Piazzolla":
      return await import("@remotion/google-fonts/Piazzolla");
    case "Piedra":
      return await import("@remotion/google-fonts/Piedra");
    case "PinyonScript":
      return await import("@remotion/google-fonts/PinyonScript");
    case "PirataOne":
      return await import("@remotion/google-fonts/PirataOne");
    case "Plaster":
      return await import("@remotion/google-fonts/Plaster");
    case "Play":
      return await import("@remotion/google-fonts/Play");
    case "Playball":
      return await import("@remotion/google-fonts/Playball");
    case "PlayfairDisplay":
      return await import("@remotion/google-fonts/PlayfairDisplay");
    case "PlayfairDisplaySC":
      return await import("@remotion/google-fonts/PlayfairDisplaySC");
    case "PlusJakartaSans":
      return await import("@remotion/google-fonts/PlusJakartaSans");
    case "Podkova":
      return await import("@remotion/google-fonts/Podkova");
    case "PoiretOne":
      return await import("@remotion/google-fonts/PoiretOne");
    case "PollerOne":
      return await import("@remotion/google-fonts/PollerOne");
    case "Poly":
      return await import("@remotion/google-fonts/Poly");
    case "Pompiere":
      return await import("@remotion/google-fonts/Pompiere");
    case "PontanoSans":
      return await import("@remotion/google-fonts/PontanoSans");
    case "PoorStory":
      return await import("@remotion/google-fonts/PoorStory");
    case "Poppins":
      return await import("@remotion/google-fonts/Poppins");
    case "PortLligatSans":
      return await import("@remotion/google-fonts/PortLligatSans");
    case "PortLligatSlab":
      return await import("@remotion/google-fonts/PortLligatSlab");
    case "PottaOne":
      return await import("@remotion/google-fonts/PottaOne");
    case "PragatiNarrow":
      return await import("@remotion/google-fonts/PragatiNarrow");
    case "Praise":
      return await import("@remotion/google-fonts/Praise");
    case "Prata":
      return await import("@remotion/google-fonts/Prata");
    case "Preahvihear":
      return await import("@remotion/google-fonts/Preahvihear");
    case "PressStart2P":
      return await import("@remotion/google-fonts/PressStart2P");
    case "Pridi":
      return await import("@remotion/google-fonts/Pridi");
    case "PrincessSofia":
      return await import("@remotion/google-fonts/PrincessSofia");
    case "Prociono":
      return await import("@remotion/google-fonts/Prociono");
    case "Prompt":
      return await import("@remotion/google-fonts/Prompt");
    case "ProstoOne":
      return await import("@remotion/google-fonts/ProstoOne");
    case "ProzaLibre":
      return await import("@remotion/google-fonts/ProzaLibre");
    case "PublicSans":
      return await import("@remotion/google-fonts/PublicSans");
    case "PuppiesPlay":
      return await import("@remotion/google-fonts/PuppiesPlay");
    case "Puritan":
      return await import("@remotion/google-fonts/Puritan");
    case "PurplePurse":
      return await import("@remotion/google-fonts/PurplePurse");
    case "Qahiri":
      return await import("@remotion/google-fonts/Qahiri");
    case "Quando":
      return await import("@remotion/google-fonts/Quando");
    case "Quantico":
      return await import("@remotion/google-fonts/Quantico");
    case "Quattrocento":
      return await import("@remotion/google-fonts/Quattrocento");
    case "QuattrocentoSans":
      return await import("@remotion/google-fonts/QuattrocentoSans");
    case "Questrial":
      return await import("@remotion/google-fonts/Questrial");
    case "Quicksand":
      return await import("@remotion/google-fonts/Quicksand");
    case "Quintessential":
      return await import("@remotion/google-fonts/Quintessential");
    case "Qwigley":
      return await import("@remotion/google-fonts/Qwigley");
    case "QwitcherGrypen":
      return await import("@remotion/google-fonts/QwitcherGrypen");
    case "RacingSansOne":
      return await import("@remotion/google-fonts/RacingSansOne");
    case "RadioCanada":
      return await import("@remotion/google-fonts/RadioCanada");
    case "Radley":
      return await import("@remotion/google-fonts/Radley");
    case "Rajdhani":
      return await import("@remotion/google-fonts/Rajdhani");
    case "Rakkas":
      return await import("@remotion/google-fonts/Rakkas");
    case "Raleway":
      return await import("@remotion/google-fonts/Raleway");
    case "RalewayDots":
      return await import("@remotion/google-fonts/RalewayDots");
    case "Ramabhadra":
      return await import("@remotion/google-fonts/Ramabhadra");
    case "Ramaraja":
      return await import("@remotion/google-fonts/Ramaraja");
    case "Rambla":
      return await import("@remotion/google-fonts/Rambla");
    case "RammettoOne":
      return await import("@remotion/google-fonts/RammettoOne");
    case "RampartOne":
      return await import("@remotion/google-fonts/RampartOne");
    case "Ranchers":
      return await import("@remotion/google-fonts/Ranchers");
    case "Rancho":
      return await import("@remotion/google-fonts/Rancho");
    case "Ranga":
      return await import("@remotion/google-fonts/Ranga");
    case "Rasa":
      return await import("@remotion/google-fonts/Rasa");
    case "Rationale":
      return await import("@remotion/google-fonts/Rationale");
    case "RaviPrakash":
      return await import("@remotion/google-fonts/RaviPrakash");
    case "ReadexPro":
      return await import("@remotion/google-fonts/ReadexPro");
    case "Recursive":
      return await import("@remotion/google-fonts/Recursive");
    case "RedHatDisplay":
      return await import("@remotion/google-fonts/RedHatDisplay");
    case "RedHatMono":
      return await import("@remotion/google-fonts/RedHatMono");
    case "RedHatText":
      return await import("@remotion/google-fonts/RedHatText");
    case "RedRose":
      return await import("@remotion/google-fonts/RedRose");
    case "Redacted":
      return await import("@remotion/google-fonts/Redacted");
    case "RedactedScript":
      return await import("@remotion/google-fonts/RedactedScript");
    case "Redressed":
      return await import("@remotion/google-fonts/Redressed");
    case "ReemKufi":
      return await import("@remotion/google-fonts/ReemKufi");
    case "ReemKufiFun":
      return await import("@remotion/google-fonts/ReemKufiFun");
    case "ReemKufiInk":
      return await import("@remotion/google-fonts/ReemKufiInk");
    case "ReenieBeanie":
      return await import("@remotion/google-fonts/ReenieBeanie");
    case "ReggaeOne":
      return await import("@remotion/google-fonts/ReggaeOne");
    case "Revalia":
      return await import("@remotion/google-fonts/Revalia");
    case "RhodiumLibre":
      return await import("@remotion/google-fonts/RhodiumLibre");
    case "Ribeye":
      return await import("@remotion/google-fonts/Ribeye");
    case "RibeyeMarrow":
      return await import("@remotion/google-fonts/RibeyeMarrow");
    case "Righteous":
      return await import("@remotion/google-fonts/Righteous");
    case "Risque":
      return await import("@remotion/google-fonts/Risque");
    case "RoadRage":
      return await import("@remotion/google-fonts/RoadRage");
    case "Roboto":
      return await import("@remotion/google-fonts/Roboto");
    case "RobotoCondensed":
      return await import("@remotion/google-fonts/RobotoCondensed");
    case "RobotoFlex":
      return await import("@remotion/google-fonts/RobotoFlex");
    case "RobotoMono":
      return await import("@remotion/google-fonts/RobotoMono");
    case "RobotoSerif":
      return await import("@remotion/google-fonts/RobotoSerif");
    case "RobotoSlab":
      return await import("@remotion/google-fonts/RobotoSlab");
    case "Rochester":
      return await import("@remotion/google-fonts/Rochester");
    case "RockSalt":
      return await import("@remotion/google-fonts/RockSalt");
    case "RocknRollOne":
      return await import("@remotion/google-fonts/RocknRollOne");
    case "Rokkitt":
      return await import("@remotion/google-fonts/Rokkitt");
    case "Romanesco":
      return await import("@remotion/google-fonts/Romanesco");
    case "RopaSans":
      return await import("@remotion/google-fonts/RopaSans");
    case "Rosario":
      return await import("@remotion/google-fonts/Rosario");
    case "Rosarivo":
      return await import("@remotion/google-fonts/Rosarivo");
    case "RougeScript":
      return await import("@remotion/google-fonts/RougeScript");
    case "Rowdies":
      return await import("@remotion/google-fonts/Rowdies");
    case "RozhaOne":
      return await import("@remotion/google-fonts/RozhaOne");
    case "Rubik":
      return await import("@remotion/google-fonts/Rubik");
    case "RubikBeastly":
      return await import("@remotion/google-fonts/RubikBeastly");
    case "RubikBubbles":
      return await import("@remotion/google-fonts/RubikBubbles");
    case "RubikBurned":
      return await import("@remotion/google-fonts/RubikBurned");
    case "RubikDirt":
      return await import("@remotion/google-fonts/RubikDirt");
    case "RubikDistressed":
      return await import("@remotion/google-fonts/RubikDistressed");
    case "RubikGlitch":
      return await import("@remotion/google-fonts/RubikGlitch");
    case "RubikIso":
      return await import("@remotion/google-fonts/RubikIso");
    case "RubikMarkerHatch":
      return await import("@remotion/google-fonts/RubikMarkerHatch");
    case "RubikMaze":
      return await import("@remotion/google-fonts/RubikMaze");
    case "RubikMicrobe":
      return await import("@remotion/google-fonts/RubikMicrobe");
    case "RubikMonoOne":
      return await import("@remotion/google-fonts/RubikMonoOne");
    case "RubikMoonrocks":
      return await import("@remotion/google-fonts/RubikMoonrocks");
    case "RubikPuddles":
      return await import("@remotion/google-fonts/RubikPuddles");
    case "RubikWetPaint":
      return await import("@remotion/google-fonts/RubikWetPaint");
    case "Ruda":
      return await import("@remotion/google-fonts/Ruda");
    case "Rufina":
      return await import("@remotion/google-fonts/Rufina");
    case "RugeBoogie":
      return await import("@remotion/google-fonts/RugeBoogie");
    case "Ruluko":
      return await import("@remotion/google-fonts/Ruluko");
    case "RumRaisin":
      return await import("@remotion/google-fonts/RumRaisin");
    case "RuslanDisplay":
      return await import("@remotion/google-fonts/RuslanDisplay");
    case "RussoOne":
      return await import("@remotion/google-fonts/RussoOne");
    case "Ruthie":
      return await import("@remotion/google-fonts/Ruthie");
    case "Rye":
      return await import("@remotion/google-fonts/Rye");
    case "STIXTwoText":
      return await import("@remotion/google-fonts/STIXTwoText");
    case "Sacramento":
      return await import("@remotion/google-fonts/Sacramento");
    case "Sahitya":
      return await import("@remotion/google-fonts/Sahitya");
    case "Sail":
      return await import("@remotion/google-fonts/Sail");
    case "Saira":
      return await import("@remotion/google-fonts/Saira");
    case "SairaCondensed":
      return await import("@remotion/google-fonts/SairaCondensed");
    case "SairaExtraCondensed":
      return await import("@remotion/google-fonts/SairaExtraCondensed");
    case "SairaSemiCondensed":
      return await import("@remotion/google-fonts/SairaSemiCondensed");
    case "SairaStencilOne":
      return await import("@remotion/google-fonts/SairaStencilOne");
    case "Salsa":
      return await import("@remotion/google-fonts/Salsa");
    case "Sanchez":
      return await import("@remotion/google-fonts/Sanchez");
    case "Sancreek":
      return await import("@remotion/google-fonts/Sancreek");
    case "Sansita":
      return await import("@remotion/google-fonts/Sansita");
    case "SansitaSwashed":
      return await import("@remotion/google-fonts/SansitaSwashed");
    case "Sarabun":
      return await import("@remotion/google-fonts/Sarabun");
    case "Sarala":
      return await import("@remotion/google-fonts/Sarala");
    case "Sarina":
      return await import("@remotion/google-fonts/Sarina");
    case "Sarpanch":
      return await import("@remotion/google-fonts/Sarpanch");
    case "SassyFrass":
      return await import("@remotion/google-fonts/SassyFrass");
    case "Satisfy":
      return await import("@remotion/google-fonts/Satisfy");
    case "SawarabiGothic":
      return await import("@remotion/google-fonts/SawarabiGothic");
    case "SawarabiMincho":
      return await import("@remotion/google-fonts/SawarabiMincho");
    case "Scada":
      return await import("@remotion/google-fonts/Scada");
    case "ScheherazadeNew":
      return await import("@remotion/google-fonts/ScheherazadeNew");
    case "Schoolbell":
      return await import("@remotion/google-fonts/Schoolbell");
    case "ScopeOne":
      return await import("@remotion/google-fonts/ScopeOne");
    case "SeaweedScript":
      return await import("@remotion/google-fonts/SeaweedScript");
    case "SecularOne":
      return await import("@remotion/google-fonts/SecularOne");
    case "SedgwickAve":
      return await import("@remotion/google-fonts/SedgwickAve");
    case "SedgwickAveDisplay":
      return await import("@remotion/google-fonts/SedgwickAveDisplay");
    case "Sen":
      return await import("@remotion/google-fonts/Sen");
    case "SendFlowers":
      return await import("@remotion/google-fonts/SendFlowers");
    case "Sevillana":
      return await import("@remotion/google-fonts/Sevillana");
    case "SeymourOne":
      return await import("@remotion/google-fonts/SeymourOne");
    case "ShadowsIntoLight":
      return await import("@remotion/google-fonts/ShadowsIntoLight");
    case "ShadowsIntoLightTwo":
      return await import("@remotion/google-fonts/ShadowsIntoLightTwo");
    case "Shalimar":
      return await import("@remotion/google-fonts/Shalimar");
    case "Shanti":
      return await import("@remotion/google-fonts/Shanti");
    case "Share":
      return await import("@remotion/google-fonts/Share");
    case "ShareTech":
      return await import("@remotion/google-fonts/ShareTech");
    case "ShareTechMono":
      return await import("@remotion/google-fonts/ShareTechMono");
    case "ShipporiAntique":
      return await import("@remotion/google-fonts/ShipporiAntique");
    case "ShipporiAntiqueB1":
      return await import("@remotion/google-fonts/ShipporiAntiqueB1");
    case "ShipporiMincho":
      return await import("@remotion/google-fonts/ShipporiMincho");
    case "ShipporiMinchoB1":
      return await import("@remotion/google-fonts/ShipporiMinchoB1");
    case "Shojumaru":
      return await import("@remotion/google-fonts/Shojumaru");
    case "ShortStack":
      return await import("@remotion/google-fonts/ShortStack");
    case "Shrikhand":
      return await import("@remotion/google-fonts/Shrikhand");
    case "Siemreap":
      return await import("@remotion/google-fonts/Siemreap");
    case "SigmarOne":
      return await import("@remotion/google-fonts/SigmarOne");
    case "Signika":
      return await import("@remotion/google-fonts/Signika");
    case "SignikaNegative":
      return await import("@remotion/google-fonts/SignikaNegative");
    case "Silkscreen":
      return await import("@remotion/google-fonts/Silkscreen");
    case "Simonetta":
      return await import("@remotion/google-fonts/Simonetta");
    case "SingleDay":
      return await import("@remotion/google-fonts/SingleDay");
    case "Sintony":
      return await import("@remotion/google-fonts/Sintony");
    case "SirinStencil":
      return await import("@remotion/google-fonts/SirinStencil");
    case "SixCaps":
      return await import("@remotion/google-fonts/SixCaps");
    case "Skranji":
      return await import("@remotion/google-fonts/Skranji");
    case "Slabo13px":
      return await import("@remotion/google-fonts/Slabo13px");
    case "Slabo27px":
      return await import("@remotion/google-fonts/Slabo27px");
    case "Slackey":
      return await import("@remotion/google-fonts/Slackey");
    case "Smokum":
      return await import("@remotion/google-fonts/Smokum");
    case "Smooch":
      return await import("@remotion/google-fonts/Smooch");
    case "SmoochSans":
      return await import("@remotion/google-fonts/SmoochSans");
    case "Smythe":
      return await import("@remotion/google-fonts/Smythe");
    case "Sniglet":
      return await import("@remotion/google-fonts/Sniglet");
    case "Snippet":
      return await import("@remotion/google-fonts/Snippet");
    case "SnowburstOne":
      return await import("@remotion/google-fonts/SnowburstOne");
    case "SofadiOne":
      return await import("@remotion/google-fonts/SofadiOne");
    case "Sofia":
      return await import("@remotion/google-fonts/Sofia");
    case "Solway":
      return await import("@remotion/google-fonts/Solway");
    case "SongMyung":
      return await import("@remotion/google-fonts/SongMyung");
    case "SonsieOne":
      return await import("@remotion/google-fonts/SonsieOne");
    case "Sora":
      return await import("@remotion/google-fonts/Sora");
    case "SortsMillGoudy":
      return await import("@remotion/google-fonts/SortsMillGoudy");
    case "SourceCodePro":
      return await import("@remotion/google-fonts/SourceCodePro");
    case "SourceSans3":
      return await import("@remotion/google-fonts/SourceSans3");

    case "SourceSerif4":
      return await import("@remotion/google-fonts/SourceSerif4");

    case "SpaceGrotesk":
      return await import("@remotion/google-fonts/SpaceGrotesk");
    case "SpaceMono":
      return await import("@remotion/google-fonts/SpaceMono");
    case "SpecialElite":
      return await import("@remotion/google-fonts/SpecialElite");
    case "Spectral":
      return await import("@remotion/google-fonts/Spectral");
    case "SpectralSC":
      return await import("@remotion/google-fonts/SpectralSC");
    case "SpicyRice":
      return await import("@remotion/google-fonts/SpicyRice");
    case "Spinnaker":
      return await import("@remotion/google-fonts/Spinnaker");
    case "Spirax":
      return await import("@remotion/google-fonts/Spirax");
    case "Splash":
      return await import("@remotion/google-fonts/Splash");
    case "SplineSans":
      return await import("@remotion/google-fonts/SplineSans");
    case "SplineSansMono":
      return await import("@remotion/google-fonts/SplineSansMono");
    case "SquadaOne":
      return await import("@remotion/google-fonts/SquadaOne");
    case "SquarePeg":
      return await import("@remotion/google-fonts/SquarePeg");
    case "SreeKrushnadevaraya":
      return await import("@remotion/google-fonts/SreeKrushnadevaraya");
    case "Sriracha":
      return await import("@remotion/google-fonts/Sriracha");
    case "Srisakdi":
      return await import("@remotion/google-fonts/Srisakdi");
    case "Staatliches":
      return await import("@remotion/google-fonts/Staatliches");
    case "Stalemate":
      return await import("@remotion/google-fonts/Stalemate");
    case "StalinistOne":
      return await import("@remotion/google-fonts/StalinistOne");
    case "StardosStencil":
      return await import("@remotion/google-fonts/StardosStencil");
    case "Stick":
      return await import("@remotion/google-fonts/Stick");
    case "StickNoBills":
      return await import("@remotion/google-fonts/StickNoBills");
    case "StintUltraCondensed":
      return await import("@remotion/google-fonts/StintUltraCondensed");
    case "StintUltraExpanded":
      return await import("@remotion/google-fonts/StintUltraExpanded");
    case "Stoke":
      return await import("@remotion/google-fonts/Stoke");
    case "Strait":
      return await import("@remotion/google-fonts/Strait");
    case "StyleScript":
      return await import("@remotion/google-fonts/StyleScript");
    case "Stylish":
      return await import("@remotion/google-fonts/Stylish");
    case "SueEllenFrancisco":
      return await import("@remotion/google-fonts/SueEllenFrancisco");
    case "SuezOne":
      return await import("@remotion/google-fonts/SuezOne");
    case "SulphurPoint":
      return await import("@remotion/google-fonts/SulphurPoint");
    case "Sumana":
      return await import("@remotion/google-fonts/Sumana");
    case "Sunflower":
      return await import("@remotion/google-fonts/Sunflower");
    case "Sunshiney":
      return await import("@remotion/google-fonts/Sunshiney");
    case "SupermercadoOne":
      return await import("@remotion/google-fonts/SupermercadoOne");
    case "Sura":
      return await import("@remotion/google-fonts/Sura");
    case "Suranna":
      return await import("@remotion/google-fonts/Suranna");
    case "Suravaram":
      return await import("@remotion/google-fonts/Suravaram");
    case "Suwannaphum":
      return await import("@remotion/google-fonts/Suwannaphum");
    case "SwankyandMooMoo":
      return await import("@remotion/google-fonts/SwankyandMooMoo");
    case "Syncopate":
      return await import("@remotion/google-fonts/Syncopate");
    case "Syne":
      return await import("@remotion/google-fonts/Syne");
    case "SyneMono":
      return await import("@remotion/google-fonts/SyneMono");
    case "SyneTactile":
      return await import("@remotion/google-fonts/SyneTactile");
    case "TaiHeritagePro":
      return await import("@remotion/google-fonts/TaiHeritagePro");
    case "Tajawal":
      return await import("@remotion/google-fonts/Tajawal");
    case "Tangerine":
      return await import("@remotion/google-fonts/Tangerine");
    case "Tapestry":
      return await import("@remotion/google-fonts/Tapestry");
    case "Taprom":
      return await import("@remotion/google-fonts/Taprom");
    case "Tauri":
      return await import("@remotion/google-fonts/Tauri");
    case "Taviraj":
      return await import("@remotion/google-fonts/Taviraj");
    case "Teko":
      return await import("@remotion/google-fonts/Teko");
    case "Telex":
      return await import("@remotion/google-fonts/Telex");
    case "TenaliRamakrishna":
      return await import("@remotion/google-fonts/TenaliRamakrishna");
    case "TenorSans":
      return await import("@remotion/google-fonts/TenorSans");
    case "TextMeOne":
      return await import("@remotion/google-fonts/TextMeOne");
    case "Texturina":
      return await import("@remotion/google-fonts/Texturina");
    case "Thasadith":
      return await import("@remotion/google-fonts/Thasadith");
    case "TheGirlNextDoor":
      return await import("@remotion/google-fonts/TheGirlNextDoor");
    case "TheNautigal":
      return await import("@remotion/google-fonts/TheNautigal");
    case "Tienne":
      return await import("@remotion/google-fonts/Tienne");
    case "Tillana":
      return await import("@remotion/google-fonts/Tillana");
    case "Timmana":
      return await import("@remotion/google-fonts/Timmana");
    case "Tinos":
      return await import("@remotion/google-fonts/Tinos");
    case "TiroBangla":
      return await import("@remotion/google-fonts/TiroBangla");
    case "TiroDevanagariHindi":
      return await import("@remotion/google-fonts/TiroDevanagariHindi");
    case "TiroDevanagariMarathi":
      return await import("@remotion/google-fonts/TiroDevanagariMarathi");
    case "TiroDevanagariSanskrit":
      return await import("@remotion/google-fonts/TiroDevanagariSanskrit");
    case "TiroGurmukhi":
      return await import("@remotion/google-fonts/TiroGurmukhi");
    case "TiroKannada":
      return await import("@remotion/google-fonts/TiroKannada");
    case "TiroTamil":
      return await import("@remotion/google-fonts/TiroTamil");
    case "TiroTelugu":
      return await import("@remotion/google-fonts/TiroTelugu");
    case "TitanOne":
      return await import("@remotion/google-fonts/TitanOne");
    case "TitilliumWeb":
      return await import("@remotion/google-fonts/TitilliumWeb");
    case "Tomorrow":
      return await import("@remotion/google-fonts/Tomorrow");
    case "Tourney":
      return await import("@remotion/google-fonts/Tourney");
    case "TradeWinds":
      return await import("@remotion/google-fonts/TradeWinds");
    case "TrainOne":
      return await import("@remotion/google-fonts/TrainOne");
    case "Trirong":
      return await import("@remotion/google-fonts/Trirong");
    case "Trispace":
      return await import("@remotion/google-fonts/Trispace");
    case "Trocchi":
      return await import("@remotion/google-fonts/Trocchi");
    case "Trochut":
      return await import("@remotion/google-fonts/Trochut");
    case "Truculenta":
      return await import("@remotion/google-fonts/Truculenta");
    case "Trykker":
      return await import("@remotion/google-fonts/Trykker");
    case "TulpenOne":
      return await import("@remotion/google-fonts/TulpenOne");
    case "TurretRoad":
      return await import("@remotion/google-fonts/TurretRoad");
    case "TwinkleStar":
      return await import("@remotion/google-fonts/TwinkleStar");
    case "Ubuntu":
      return await import("@remotion/google-fonts/Ubuntu");
    case "UbuntuCondensed":
      return await import("@remotion/google-fonts/UbuntuCondensed");
    case "UbuntuMono":
      return await import("@remotion/google-fonts/UbuntuMono");
    case "Uchen":
      return await import("@remotion/google-fonts/Uchen");
    case "Ultra":
      return await import("@remotion/google-fonts/Ultra");
    case "UncialAntiqua":
      return await import("@remotion/google-fonts/UncialAntiqua");
    case "Underdog":
      return await import("@remotion/google-fonts/Underdog");
    case "UnicaOne":
      return await import("@remotion/google-fonts/UnicaOne");
    case "UnifrakturCook":
      return await import("@remotion/google-fonts/UnifrakturCook");
    case "UnifrakturMaguntia":
      return await import("@remotion/google-fonts/UnifrakturMaguntia");
    case "Unkempt":
      return await import("@remotion/google-fonts/Unkempt");
    case "Unlock":
      return await import("@remotion/google-fonts/Unlock");
    case "Unna":
      return await import("@remotion/google-fonts/Unna");
    case "Updock":
      return await import("@remotion/google-fonts/Updock");
    case "Urbanist":
      return await import("@remotion/google-fonts/Urbanist");
    case "VT323":
      return await import("@remotion/google-fonts/VT323");
    case "VampiroOne":
      return await import("@remotion/google-fonts/VampiroOne");
    case "Varela":
      return await import("@remotion/google-fonts/Varela");
    case "VarelaRound":
      return await import("@remotion/google-fonts/VarelaRound");
    case "Varta":
      return await import("@remotion/google-fonts/Varta");
    case "VastShadow":
      return await import("@remotion/google-fonts/VastShadow");
    case "Vazirmatn":
      return await import("@remotion/google-fonts/Vazirmatn");
    case "VesperLibre":
      return await import("@remotion/google-fonts/VesperLibre");
    case "ViaodaLibre":
      return await import("@remotion/google-fonts/ViaodaLibre");
    case "Vibes":
      return await import("@remotion/google-fonts/Vibes");
    case "Vibur":
      return await import("@remotion/google-fonts/Vibur");
    case "Vidaloka":
      return await import("@remotion/google-fonts/Vidaloka");
    case "Viga":
      return await import("@remotion/google-fonts/Viga");
    case "Voces":
      return await import("@remotion/google-fonts/Voces");
    case "Volkhov":
      return await import("@remotion/google-fonts/Volkhov");
    case "Vollkorn":
      return await import("@remotion/google-fonts/Vollkorn");
    case "VollkornSC":
      return await import("@remotion/google-fonts/VollkornSC");
    case "Voltaire":
      return await import("@remotion/google-fonts/Voltaire");
    case "VujahdayScript":
      return await import("@remotion/google-fonts/VujahdayScript");
    case "WaitingfortheSunrise":
      return await import("@remotion/google-fonts/WaitingfortheSunrise");
    case "Wallpoet":
      return await import("@remotion/google-fonts/Wallpoet");
    case "WalterTurncoat":
      return await import("@remotion/google-fonts/WalterTurncoat");
    case "Warnes":
      return await import("@remotion/google-fonts/Warnes");
    case "WaterBrush":
      return await import("@remotion/google-fonts/WaterBrush");
    case "Waterfall":
      return await import("@remotion/google-fonts/Waterfall");
    case "Wellfleet":
      return await import("@remotion/google-fonts/Wellfleet");
    case "WendyOne":
      return await import("@remotion/google-fonts/WendyOne");
    case "Whisper":
      return await import("@remotion/google-fonts/Whisper");
    case "WindSong":
      return await import("@remotion/google-fonts/WindSong");
    case "WireOne":
      return await import("@remotion/google-fonts/WireOne");
    case "WorkSans":
      return await import("@remotion/google-fonts/WorkSans");
    case "XanhMono":
      return await import("@remotion/google-fonts/XanhMono");
    case "Yaldevi":
      return await import("@remotion/google-fonts/Yaldevi");
    case "YanoneKaffeesatz":
      return await import("@remotion/google-fonts/YanoneKaffeesatz");
    case "Yantramanav":
      return await import("@remotion/google-fonts/Yantramanav");
    case "YatraOne":
      return await import("@remotion/google-fonts/YatraOne");
    case "Yellowtail":
      return await import("@remotion/google-fonts/Yellowtail");
    case "YeonSung":
      return await import("@remotion/google-fonts/YeonSung");
    case "YesevaOne":
      return await import("@remotion/google-fonts/YesevaOne");
    case "Yesteryear":
      return await import("@remotion/google-fonts/Yesteryear");
    case "Yomogi":
      return await import("@remotion/google-fonts/Yomogi");
    case "Yrsa":
      return await import("@remotion/google-fonts/Yrsa");
    case "YujiBoku":
      return await import("@remotion/google-fonts/YujiBoku");
    case "YujiMai":
      return await import("@remotion/google-fonts/YujiMai");
    case "YujiSyuku":
      return await import("@remotion/google-fonts/YujiSyuku");
    case "YuseiMagic":
      return await import("@remotion/google-fonts/YuseiMagic");
    case "ZCOOLKuaiLe":
      return await import("@remotion/google-fonts/ZCOOLKuaiLe");
    case "ZCOOLQingKeHuangYou":
      return await import("@remotion/google-fonts/ZCOOLQingKeHuangYou");
    case "ZCOOLXiaoWei":
      return await import("@remotion/google-fonts/ZCOOLXiaoWei");
    case "ZenAntique":
      return await import("@remotion/google-fonts/ZenAntique");
    case "ZenAntiqueSoft":
      return await import("@remotion/google-fonts/ZenAntiqueSoft");
    case "ZenDots":
      return await import("@remotion/google-fonts/ZenDots");
    case "ZenKakuGothicAntique":
      return await import("@remotion/google-fonts/ZenKakuGothicAntique");
    case "ZenKakuGothicNew":
      return await import("@remotion/google-fonts/ZenKakuGothicNew");
    case "ZenKurenaido":
      return await import("@remotion/google-fonts/ZenKurenaido");
    case "ZenLoop":
      return await import("@remotion/google-fonts/ZenLoop");
    case "ZenMaruGothic":
      return await import("@remotion/google-fonts/ZenMaruGothic");
    case "ZenOldMincho":
      return await import("@remotion/google-fonts/ZenOldMincho");
    case "ZenTokyoZoo":
      return await import("@remotion/google-fonts/ZenTokyoZoo");
    case "Zeyada":
      return await import("@remotion/google-fonts/Zeyada");
    case "ZhiMangXing":
      return await import("@remotion/google-fonts/ZhiMangXing");
    case "ZillaSlab":
      return await import("@remotion/google-fonts/ZillaSlab");
    case "ZillaSlabHighlight":
      return await import("@remotion/google-fonts/ZillaSlabHighlight");
  }
};
