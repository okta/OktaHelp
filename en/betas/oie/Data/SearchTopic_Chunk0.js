define({"0":{y:0,u:"../Content/Topics/identity-engine/oie-index.htm",l:-1,t:"Okta Identity Engine | Okta",i:0.00602198605793868,a:"Okta Identity Engine EAP documentation for Okta administrators Customize your Okta cloud components with Identity Engine to satisfy an unlimited number of identity use cases. Instead of a reliance on pre-defined behavior for authentication, authorization, and enrollment, Identity Engine provides ..."},"1":{y:0,u:"../Content/Topics/identity-engine/oie-about.htm",l:-1,t:"About Okta Identity Engine | Okta",i:0.00602198605793868,a:"About Okta Identity Engine Okta Identity Engine allows organizations to customize their Okta cloud components to satisfy an unlimited number of identity use cases. Instead of a reliance on pre-defined behavior for authentication, authorization, and enrollment, Identity Engine offers customizable ..."},"2":{y:0,u:"../Content/Topics/identity-engine/oie-features.htm",l:-1,t:"Why use Identity Engine? | Okta",i:0.00758606520819123,a:"Why use Identity Engine?   Passwordless authentication Admins can enable the email authenticator now with the addition of a magic link in the email notification sent to end users.  When policies are configured to include non-password authenticators, end users may sign in to their account using ..."},"3":{y:0,u:"../Content/Topics/identity-engine/oie-whats-new.htm",l:-1,t:"New concepts | Okta",i:0.00758606520819123,a:"New concepts   Assurance The degree of confidence that an end user signing in to an application is the same end user who previously signed in to the application. The use of one or more authenticators and its characteristics determine an assurance level. An end user who authenticates with a knowledge ..."},"4":{y:0,u:"../Content/Topics/identity-engine/oie-begin.htm",l:-1,t:"Before you begin | Okta",i:0.00758606520819123,a:"Before you begin Before you get started with Identity Engine, make a note of the permissions, dependencies, and limitations that may impact your org.   Administrator permissions  Super admin access is required to create sign-on policies and configure assurance and authenticators. Dependencies If you ..."},"5":{y:0,u:"../Content/Topics/identity-engine/oie-upgrade.htm",l:-1,t:"Upgrade to Identity Engine | Okta",i:0.00758606520819123,a:"Upgrade to Identity Engine Before you upgrade your org to use Identity Engine, make a note of the expected behavior in this section. Once you upgrade to Identity Engine: Okta sign-on policies are preserved without any changes. App sign-on policies are preserved and are migrated to the equivalent ..."},"6":{y:0,u:"../Content/Topics/identity-engine/authenticators/about-authenticators.htm",l:-1,t:"About MFA and authenticators | Okta",i:0.00630636408525733,a:"About MFA and authenticators Authenticators are credentials owned or controlled by an end user which can be verified by an application or service. Passwords, answers to security questions, phones (SMS or voice call), and authentication apps like Okta Verify are examples of authenticators.   One or ..."},"7":{y:0,u:"../Content/Topics/identity-engine/policies/about-mfa-enrollment-policies.htm",l:-1,t:"About MFA enrollment policies and rules | Okta",i:0.00737847062298493,a:"About MFA enrollment policies and rules With MFA enrollment policies, you can create and enforce policies and rules for specific MFA factors and assign groups accordingly. Sign-on policies determine the types of authentication challenges end users experience when they sign into their account. MFA ..."},"8":{y:0,u:"../Content/Topics/identity-engine/policies/about-policies.htm",l:-1,t:"About sign-on policies | Okta",i:0.00630636408525733,a:"About sign-on policies Sign-on policies enforce assurance, which refers to a confidence level that the user signing in to an application is also the person who actually owns the account.  The use of one or more authenticators, and the characteristics of those authenticators, determines an assurance ..."},"9":{y:0,u:"../Content/Topics/identity-engine/policies/about-okta-sign-on-policies.htm",l:-1,t:"Okta sign-on policies | Okta",i:0.0339345449549216,a:"Okta sign-on policies After Okta identifies the user, an Okta sign-on policy supplies the context necessary for the user to advance to the next step. Okta sign-on policies also specify actions to take, such as allowing access, prompting for a challenge, and setting the time before prompting for ..."},"10":{y:0,u:"../Content/Topics/identity-engine/policies/about-app-sign-on-policies.htm",l:-1,t:"App sign-on policies | Okta",i:0.0391081917056484,a:"App sign-on policies App sign-on policies enforce end user authentication in the context of the requested application. The user’s location and profile (also identified by the Okta Sign-on policy) are verified against the app sign-on policy’s group membership and authentication criteria. Each ..."},"11":{y:0,u:"../Content/Topics/identity-engine/policies/about-profile-enrollment-policies.htm",l:-1,t:"Profile Enrollment policies | Okta",i:0.0254390441314945,a:"Profile Enrollment policies The Profile Enrollment policy collects the  attributes required to ensure that the identified end user’s profile is complete before accessing the app. You can use your Profile Enrollment policy for the following purposes: Allow users self-register with your Okta sign-in ..."},"12":{y:0,u:"../Content/Topics/identity-engine/authenticators/add-authenticator.htm",l:-1,t:"Add an authenticator | Okta",i:0.0156900868989886,a:"Add an authenticator In the Admin Console, go to Security \u003e Authenticators. Under Setup, click Add Authenticator. The Add Authenticator window appears. Choose the Authenticator of your choice and click Add to make it available. The Authenticator will appear immediately in the list of added ..."},"13":{y:0,u:"../Content/Topics/identity-engine/authenticators/configure-authenticators.htm",l:-1,t:"Configure an authenticator | Okta",i:0.00737847062298493,a:"Configure an authenticator Authenticators are credentials owned or controlled by an end user which can be verified by an application or service. Passwords, answers to security questions, phones (SMS or voice call), and authentication apps like Okta Verify are examples of authenticators.   Security ..."},"14":{y:0,u:"../Content/Topics/identity-engine/authenticators/configure-security-key.htm",l:-1,t:"Configure Security Key or Biometric authenticator | Okta",i:0.0692609449870613,a:"Configure Security Key or Biometric authenticator The Security Key or Biometric authenticator follows the FIDO2 Web Authentication (WebAuthn) standard. Once this authenticator is enabled and set to required or optional, end users mayselect it when signing in and set it up so it may be used for ..."},"15":{y:0,u:"../Content/Topics/identity-engine/authenticators/‌configure-password.htm",l:-1,t:"Configure password authenticator | Okta",i:0.0703245783395975,a:"Configure password authenticator The Password authenticator consists of a string of characters that can be specified by users or set by an admin. Admins can also change the password complexity requirements and recovery settings by editing this authenticator. Once added, the Password Authenticator ..."},"16":{y:0,u:"../Content/Topics/identity-engine/authenticators/configure-phone.htm",l:-1,t:"Configure phone authenticator | Okta",i:0.0703245783395975,a:"Configure phone authenticator SMS and Voice Call are now merged into the Phone authenticator, which can be accessed from Security \u003e Authenticators \u003e Phone. Users can enroll in the Phone authenticator using either SMS or Voice Call methods. Users can authenticate using either method. Phone numbers ..."},"17":{y:0,u:"../Content/Topics/identity-engine/authenticators/configure-email-authenticator.htm",l:-1,t:"Configure email authenticator | Okta",i:0.0692609449870613,a:"Configure email authenticator The Email authenticator allows users to authenticate successfully with a token (referred to as an Email Magic Link) that is sent to their primary email address. Once a user receives the token, they either follow the link that contains the embedded token or alternatively ..."},"18":{y:0,u:"../Content/Topics/identity-engine/authenticators/configure-security-question.htm",l:-1,t:"Configure security question authenticator | Okta",i:0.0692609449870613,a:"Configure security question authenticator The Security Question authenticator can be managed and reset by admins. It will show up as required when end users enroll in MFA, even if it isn’t present in the MFA enrollment policy. You can disable it by deselecting Security Question under Authenticators ..."},"19":{y:0,u:"../Content/Topics/identity-engine/policies/create-mfa-policy.htm",l:-1,t:"Create an MFA policy | Okta",i:0.0700725879034196,a:"Create an MFA policy Policies can be applied to specific groups within your org and automatically enforced for only those users. In the Admin Console, go to Security \u003e Authenticators. Click the Enrollment tab. To create a new policy, click Add Multifactor Policy to open the Add Policy screen. Policy ..."},"20":{y:0,u:"../Content/Topics/identity-engine/policies/add-mfa-policy-rule.htm",l:-1,t:"Add an MFA policy rule | Okta",i:0.0700725879034196,a:"Add an MFA policy rule Rules allow you to add conditions to your policy choices. Once you’ve created an MFA enrollment policy, click the Add Rule button to set up a policy rule. Rule Name: Add a descriptive name for the rule you want to create. Exclude Users: If needed, you can exclude individual ..."},"21":{y:0,u:"../Content/Topics/identity-engine/policies/set-up-policies.htm",l:-1,t:"Set up sign-on policies | Okta",i:0.00602198605793868,a:"Set up sign-on policies Sign-on policies enforce assurance, which refers to a confidence level that the user signing in to an application is also the person who actually owns the account.  The use of one or more authenticators, and the characteristics of those authenticators, determines an assurance ..."},"22":{y:0,u:"../Content/Topics/identity-engine/policies/create-okta-sign-on-policy.htm",l:-1,t:"Create an Okta sign-on policy | Okta",i:0.0386110109670487,a:"Create an Okta sign-on policy After Okta identifies the user, an Okta sign-on policy supplies the context necessary for the user to advance to the next step. Okta sign-on policies also specify actions to take, such as allowing access, prompting for a challenge, and setting the time before prompting ..."},"23":{y:0,u:"../Content/Topics/identity-engine/policies/add-okta-sign-on-policy-rule.htm",l:-1,t:"Add an Okta sign-on policy rule | Okta",i:0.0406440809072363,a:"Add an Okta sign-on policy rule Rules describe the conditions of policy behavior, like requests from a geographical location or whether the user is on or off a trusted network. There isn’t a limit to the number of rules your Okta sign-on policy can have, but it must have at least one rule before it ..."},"24":{y:0,u:"../Content/Topics/identity-engine/procedures/set-up-default-app-redirect.htm",l:-1,t:"Set up default app redirect | Okta",i:0.00795149853434541,a:"Set up default app redirect If Okta can’t determine the application your end users are attempting to access when they sign in, they are directed to the End User Dashboard. You can now configure a default app redirect so that end users who sign in without a specific app in context, or recovered end ..."},"25":{y:0,u:"../Content/Topics/identity-engine/procedures/configure-passwordless-auth.htm",l:-1,t:"Configure passwordless authentication with email magic link | Okta",i:0.0338279827212702,a:"Configure passwordless authentication with email magic link You can configure your Okta and app sign-on policies to create a passwordless sign-in experience for your end users. Create an Okta sign-on policy . Enable email as an authenticator and set it to allowed for SSO. Create an MFA enrollment ..."},"26":{y:0,u:"../Content/Topics/identity-engine/policies/create-profile-enrollment-policy-sr.htm",l:-1,t:"Create a Profile Enrollment policy for self-registration | Okta",i:0.0205822354753627,a:"Create a Profile Enrollment policy for self-registration This Profile Enrollment policy allows\n\t\t end users to self-register through a Sign-up link in the Okta Sign-in widget. By the time the user has authenticated into the app, their profile is created and they’ve been provisioned to the ..."},"27":{y:0,u:"../Content/Topics/identity-engine/policies/create-profile-enrollment-policy-pp.htm",l:-1,t:"Create a Profile Enrollment policy for progressive profiling | Okta",i:0.0174747105238592,a:"Create a Profile Enrollment policy for progressive profiling \n\t\tWhen not used for self-registration, the Profile Enrollment policy can collect the additional data required by an application if the user has not accessed it yet. You can collect additional information as the user advances to other ..."},"28":{y:0,u:"../Content/Topics/identity-engine/enduser/eu-sign-in-widget.htm",l:-1,t:"New user registration and activation  | Okta",i:0.0299675043211746,a:"New user registration and activation  New users register and activate their profiles in the sign-in widget instead of the welcome wizard, allowing you to fully customize and brand the onboarding experience with custom Okta-hosted sign-in pages. Sign-in widget The end user sign-in sequence depends on ..."},"29":{y:0,u:"../Content/Topics/identity-engine/enduser/eu-authenticators.htm",l:-1,t:"Authenticators | Okta",i:0.0308544112600715,a:"Authenticators During sign-in, end users authenticate through the primary and secondary authenticators among those you’ve made available in your policies. Security Key or Biometric FIDO2 Web Authentication (WebAuthn) is a standard web API that is incorporated into web browsers and related web ..."},"30":{y:0,u:"../Content/Topics/identity-engine/enduser/eu-settings.htm",l:-1,t:"Settings | Okta",i:0.0277868032216115,a:"Settings The End User Dashboard \u003e Settings menu has different options in Identity Engine. Profile re-authentication is not supported in orgs using Identity Engine. Forgotten authenticator settings: Authenticators used for recovery are the same as authenticators used for sign in. Users manage all ..."},"31":{y:0,u:"../Content/Topics/identity-engine/enduser/eu-self-registration.htm",l:-1,t:"Self registration (Profile Enrollment) | Okta",i:0.00731164797287846,a:"Self registration (Profile Enrollment) When Sign-Up is enabled, new users can click the Sign-up link in the Okta Sign-in widget. This launches the Create Account registration form, where they fill out the fields you configured in the Profile Enroll Policy. Okta automatically uses the email address ..."},"32":{y:0,u:"../Content/Topics/identity-engine/enduser/eu-progressive-profiling.htm",l:-1,t:"Progressive profiling (Profile Enrollment) | Okta",i:0.00602198605793868,a:"Progressive profiling (Profile Enrollment) When Sign-Up is not enabled, the Sign-up link does not appear in the Okta Sign-in widget. Any new user with an unknown username is denied access to the application. Existing users who have previously registered can sign in with only the credentials that ..."},"33":{y:0,u:"../Content/Topics/identity-engine/enduser/eu-authentication-scenarios.htm",l:-1,t:"Authentication scenarios  | Okta",i:0.00630636408525733,a:"Authentication scenarios To demonstrate how the sign-on policies interact, consider an Okta sign-on policy that uses Password / IDP / any factor allowed by app sign on rules. This Okta sign-on policy setting offers the most flexibility when configuring app-level policies for each app in your org ..."},"34":{y:0,u:"../Content/Resources/Stylesheets/foundation-icons/preview.html",l:-1,t:"Foundation Icons glyphs preview",i:0.00602198605793868,a:"Foundation Icons contains 283 glyphs: 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 12141618212436486072 ..."},"35":{y:0,u:"../Content/Topics/identity-engine/policies/add-app-sign-on-policy-rule.htm",l:-1,t:"Add an app sign-on policy rule | Okta",i:0.0345316095405524,a:"Add an app sign-on policy rule App sign-on policies enforce end user authentication in the context of the requested application. Every app in your org already has a sign-on policy in place. You can add rules to that policy to customize the level of access.  For example, you may want  all default ..."},"36":{y:0,u:"../Content/Topics/identity-engine/policies/configure-profile-enrollment-policy.htm",l:-1,t:"Update a Profile Enrollment policy  | Okta",i:0.00755525873417864,a:"Update a Profile Enrollment policy  In the Admin Console, go to Security \u003e Profile Enrollment.  On the Profile Enrollment page, locate the policy, and then click (lost icon) in the Actions column. Or, to delete the policy, click (lost icon). Note: You cannot delete policies that are assigned to ..."},"37":{y:0,u:"../Content/Topics/identity-engine/oie-release-notes.htm",l:-1,t:"Identity Engine Release Notes | Okta",i:0.00602198605793868,a:"Identity Engine Release Notes Release Summary:     Release History"},});