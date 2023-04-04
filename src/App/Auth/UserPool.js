import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
  UserPoolId: 'us-east-1_SeImZCzwx',
  ClientId: 'aba9g0lrraugp5gj8vhm588mh',
};
const UserPool = new CognitoUserPool(poolData);
export default UserPool