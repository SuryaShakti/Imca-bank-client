import app from './index';

export const AcountService = app.service("accounts");

export const getAllAccounts = (skip = 0) => AccountService.find({
    query: {
        $skip: skip
    }
});

export const createAccount = (userName, phone, email, dob, address, adhaar, avatar, accountNumber, accounType, ifscCode, branch, customrId, nominee) =>
    AccountService.create({
        name: userName,
        phone,
        email,
        dob,
        address,
        adhaar,
        avatar,
        accountNumber,
        accounType,
        ifscCode,
        branch,
        customrId,
        nominee
    });

export const deleteAccount = (id) => AccountService.remove(id);