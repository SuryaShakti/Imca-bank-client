import app from './index';

export const AccountService = app.service("account");

export const getAllAccounts = (skip = 0, limit, search) => AccountService.find({
    query: {
        accountNumber: {
            $regex: `.*${search}.*`,
            $options: 'i',
        },
        $populate: 'user',
        $skip: skip,
        $limit: limit,
        status: 1,
    }
});

export const createAccount = (user, accountType, ifscCode, branch,  nomineeName, balance) =>
    AccountService.create({
        user,
        accountType,
        ifscCode,
        branch,
        nomineeName,
        balance
    });

export const deleteAccount = (id) => AccountService.remove(id);