# @bildit-platform/nextjs Example

**@bildit-platform/nextjs** is a library for integrating Bildit CMS with Next.js applications. This example demonstrates how to set up and use the library in a basic Next.js project.

## Installation

To install the `@bildit-platform/nextjs` library, you can use either npm or yarn:

```bash
# Using npm
npm install @bildit-platform/nextjs
```
```bash
# Using yarn
yarn add @bildit-platform/nextjs
```
```bash
# Using pnpm
pnpm install @bildit-platform/nextjs
```

For more detailed installation instructions and additional options, refer to the [library's documentation](https://docs.bildit.co/docs/webcms/nextjs/integration-guide).

## API Reference
For more detailed information on the library's components and hooks, refer to the [library's documentation](https://docs.bildit.co/docs/webcms/nextjs/api-reference).

## Support
For more information on how to get help or support, refer to the [library's documentation](https://docs.bildit.co/docs/webcms/support/getting-help).

## Configuring .npmrc for Private Packages

If you need to install private packages like `@bildit-platform/nextjs` and `@bildit-platform/engine`, you will need to request an npm token from your NPM account owner or administrator. Here are the steps:

1. **Contact Your Account Owner**: Reach out to the person who owns your account (e.g., a team member, project manager) to request access to generate an npm token for you.

2. **Add the Token to `.npmrc`**: Once you have the token, create `.npmrc` file in your project directory using a text editor and add the following line:

   ```plaintext
   //registry.npmjs.org/:_authToken=<your-token>
   ```

   Replace `<your-token>` with the actual token you generated from NPM.

3. **Install Private Packages**: You can now install private packages using npm or yarn. For example:

   ```bash
   # Using npm
   npm install @bildit-platform/nextjs @bildit-platform/engine
   ```

   ```bash
   # Using yarn
   yarn add @bildit-platform/nextjs @bildit-platform/engine
   ```

By following these steps, you can ensure that your project has the necessary access to install private packages like `@bildit-platform/nextjs` and `@bildit-platform/engine`. If you need further assistance or have any questions, feel free to ask!
