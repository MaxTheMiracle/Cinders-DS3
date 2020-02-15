// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    InitializeCommonEvent(20008221, 4600600, 40020, 40, 4000970, 25000005); // Trial of Avarice - Return
    
    // Arena
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 14605300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14605300);
    InitializeCommonEvent(20005941, 14605300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 14605300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 14605300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 14605300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 14605300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 14605300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 14605300);
});

Event(14605200, Default, function(X0_4, X4_4, X8_4) {
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfHollowArenaMatchReadyState(AND_01, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    WaitFixedTimeSeconds(X0_4);
    IfPlayerIsNotInOwnWorldExcludesArena(MAIN, false);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    WaitFixedTimeSeconds(X4_4);
    IfPlayerIsNotInOwnWorldExcludesArena(MAIN, false);
    WaitFixedTimeSeconds(X8_4);
    SendAllPhantomsHomeAndUpdateServerPvpStats(0);
});


