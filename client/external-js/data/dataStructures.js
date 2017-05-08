/**
 * Created by liz on 5/4/17.
 */


export class myStruct {
    constructor(a = null, b = null, c = null) {
        if (a !== null) this.setMainInfo(a);
        if (b !== null) this.setExperience(b);
        if (c !== null) this.setSpouseData(c);
    }

    setMainInfo({'firstname': fn, 'lastname': ln, 'middlename': mn} = null) {
        this.firstname = fn;
        this.lastname = ln;
        this.middlename = mn;
    }

    setExperience({'years': yrs, 'companies': comps, 'roles': r0l3s}) {
        this.experienceYears = yrs;

        //add to current object all companies
        this.companies = {};
        for (let companyNum in comps) {
            if (comps.hasOwnProperty(companyNum) === true) {
                this.companies[companyNum] = comps[companyNum];
            }
        }

        //add to current object all roles
        this.roles = {};
        for (let roleNum in r0l3s) {
            if (r0l3s.hasOwnProperty(roleNum) === true) {
                this.roles[roleNum] = r0l3s[roleNum];
            }
        }
    }

    setSpouseData({'spouseFN': fname, 'spouseLN': lname, 'spouseMN': mname, 'spouseJob': job, 'spouseExperienceYears': expYears, 'spouseBornData': bornData}) {
        // this.spouseInformation = {};
        let spouse = this.spouseInformation = {};
        spouse.firstname = fname;
        spouse.lastname = lname;
        spouse.middlename = mname;
        spouse.job = job;
        spouse.experienceYears = expYears;

        spouse.spouseBornData = {};
        for (let i in bornData) {
            if (bornData.hasOwnProperty(i) === true) {
                spouse.spouseBornData[i] = bornData[i];
            }
        }
    }
}