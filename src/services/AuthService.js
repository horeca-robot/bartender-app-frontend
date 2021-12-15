import BaseService from "./BaseService";
import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

const getClaimsFromTokenParts = (tokenParts) => {
    if(!Array.isArray(tokenParts))
        throw new Error("Given parts must be of type 'Array'.");

    if(tokenParts.length !== 3)
        throw new Error("Invalid JWT given. Some parts are missing.");

    try
    {
        return JSON.parse(atob(tokenParts[1]));
    }
    catch(e)
    {
        return null;
    }
}

const getUIDFromToken = (token) => {
    if(typeof token != 'string')
        throw new Error("Token must be a JWT string.");

    const splittedToken = token.split('.');
    const claims = getClaimsFromTokenParts(splittedToken);

    if(claims.uid === undefined)
        return null;

    return claims.uid;    
}

export default class extends BaseService
{
    constructor()
    {
        super('employee');
    }

    /**
     * Log employee in
     *
     * @return Array
    */
    async LogIn(id, employee)
    {
        const [response, error] = await Request(AxiosClient.post(`/${this._entityType}/${id}/login`, employee));

        if(error !== null || (response !== null && response.status !== 200)) {
            return null;
        }

        return response.data;
    }

    async verifyJWT(token)
    {
        const uid = getUIDFromToken(token);

        if(uid === null)
            throw new Error("Claim missing on JWT: 'uid'.");

        const [response, error] = await Request(AxiosClient.post(`/${this._entityType}/${uid}/validate`, {token}));

        if(error !== null)
            return false;

        if(response !== null && response.status !== undefined && response.status === 200)
            return true;

        return false;
    }

    async refreshJWT(token)
    {
        const uid = getUIDFromToken(token);

        if(uid === null)
            throw new Error("Claim missing on JWT: 'uid'.");

        const [response, error] = await Request(AxiosClient.post(`/${this._entityType}/${uid}/refresh`, {token}));

        if(error !== null)
            return null;

        if(response !== null && response.status !== undefined && response.status === 200 && response.data.length > 0)
            return response.data;

        return null;
    }
}
