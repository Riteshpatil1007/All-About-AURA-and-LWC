public with sharing class getContactListCls {
    public static List<Contact> contLst() {
        return [SELECT FirstName, LastName, Phone, Email
                FROM Contact
                ORDER BY FirstName ASC];
    }
}
