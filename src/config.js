export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_aWdJ6H3J8gH0l4J2H4YPXPDF00LWpVNbOO",
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-uploads-rao"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://lebmtky6gc.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_VPEXEFmrb",
      APP_CLIENT_ID: "7scbbms2qlkupgu9f1iltt2ekl",
      IDENTITY_POOL_ID: "us-west-2:7b9899ee-7859-4835-84aa-f158103ddac7"
    }
  };
  