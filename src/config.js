
const dev = {
    STRIPE_KEY: "pk_test_aWdJ6H3J8gH0l4J2H4YPXPDF00LWpVNbOO",
    s3: {
      REGION: "us-west-2",
      BUCKET: "rao-notes-app-2-api-dev-attachmentsbucket-1y0pkhhjmgow6"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://9wbjogsrf4.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_RHo5rv6qB",
      APP_CLIENT_ID: "1mmabg6fq68105h6k53fappaau",
      IDENTITY_POOL_ID: "us-west-2:e030e15a-03c8-45cb-9192-2f3369744147"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_aWdJ6H3J8gH0l4J2H4YPXPDF00LWpVNbOO",
    s3: {
      REGION: "us-west-2",
      BUCKET: "rao-notes-app-2-api-prod-attachmentsbucket-oy0o5wbfiqnw"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "YOUR_PROD_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_IhxvrlNb2",
      APP_CLIENT_ID: "176mc0ps21cj3gd29m94sarana",
      IDENTITY_POOL_ID: "us-west-2:fe0c2b43-1473-41ca-9c6a-23237c28c444"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };
  