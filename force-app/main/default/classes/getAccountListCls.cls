public with sharing class getAccountListCls {
    @AuraEnabled(cacheable=true)
    public static List<Account> accMethd(){
        return [SELECT Id, Name, AnnualRevenue, Type 
                FROM Account 
                WHERE AnnualRevenue != null AND Type != null ];
    }
}
