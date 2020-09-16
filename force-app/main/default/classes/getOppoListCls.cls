public with sharing class getOppoListCls {
    public static List<Opportunity>  oppoLst() {
        return [SELECT Name, Amount, CloseDate, StageName, Type
                FROM Opportunity
                ORDER BY Amount ASC];

    }
}
