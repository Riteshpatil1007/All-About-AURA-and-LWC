import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY_OBJ from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSED_DATE from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';

export default class OppoCreator extends LightningElement {
    objectApiName = OPPORTUNITY_OBJ
    fields = [NAME_FIELD, AMOUNT_FIELD, CLOSED_DATE, STAGE_NAME, TYPE_FIELD];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Opportunity created successfully",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}