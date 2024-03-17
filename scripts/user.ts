"use strict";

namespace core {
    export class User {

        private _displayName:string;
        private _emailAddress:string;
        private _username:string;
        private _password:string;

        constructor(displayName:string = "", emailAddress:string = "",
                    username:string = "", password:string = "") {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._username = username;
            this._password = password;
        }

        public get displayName():string {
            return this._displayName;
        }

        public set displayName(value:string) {
            this._displayName = value;
        }

        public get emailAddress():string {
            return this._emailAddress;
        }

        public set emailAddress(value:string) {
            this._emailAddress = value;
        }

        public get username():string {
            return this._username;
        }

        public set username(value:string) {
            this._username = value;
        }

        public get password():string {
            return this._password;
        }

        public set password(value:string) {
            this._password = value;
        }

        public toString():string {
            return `DisplayName: ${this._displayName}\n EmailAddress: ${this._emailAddress}\n 
                Username: ${this._username}`;
        }

        /**
         * Serialize for writing to localStorage
         */
        public serialize():string|null {
            if (this._displayName !== "" && this._emailAddress !== "" && this._username !== "") {
                return `${this.displayName}, ${this.emailAddress}, ${this.username}`;
            }
            console.error("One or more of the contact properties is missing or invalid!");
            return null;
        }

        /**
         * Deserialize is used to read data from localStorage
         */
        public deserialize(data:string):void {
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._username = propertyArray[2];
        }


        public toJSON():{Username:string; DisplayName:string; EmailAddress:string}{
            return {
                DisplayName: this._displayName,
                EmailAddress: this._emailAddress,
                Username : this._username
            }
        }

        fromJSON(data:User):void{
            this._displayName = data.displayName;
            this._emailAddress = data.emailAddress;
            this._username = data.username;
            this._password = data.password;
        }
    }

}