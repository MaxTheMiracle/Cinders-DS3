// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    
    // Duel
    Label0();
    InitializeCommonEvent(20005920, 0, 14705300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14705300);
    InitializeCommonEvent(20005941, 14705300);
    EndUnconditionally(EventEndType.End);
    
    // 2-P Brawl
    Label1();
    InitializeCommonEvent(20005920, 1, 14705300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    
    // 4-P Brawl
    Label2();
    InitializeCommonEvent(20005920, 2, 14705300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    
    // 6-P Brawl
    Label3();
    InitializeCommonEvent(20005920, 3, 14705300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    
    // 2v3 Brawl
    Label4();
    InitializeCommonEvent(20005920, 4, 14705300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    
    // 3v3 Brawl
    Label5();
    InitializeCommonEvent(20005920, 5, 14705300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    
    Label9();
    InitializeCommonEvent(20005940, 14705300);
});

