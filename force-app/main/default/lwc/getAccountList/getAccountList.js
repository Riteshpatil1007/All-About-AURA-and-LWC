import { LightningElement, wire } from 'lwc';
import acctListAlias from '@salesforce/apex/getAccountListCls.accMethd'

export default class GetAccountList extends LightningElement {

    @wire(acctListAlias)
    wireAccount
}