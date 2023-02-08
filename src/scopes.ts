const ValidScopes = [
  {
    "scope": "AccessReview.Read.All",
    "type": "Delegated",
    "id": "ebfcd32b-babb-40f4-a14b-42706e83bd28"
  },
  {
    "scope": "AccessReview.Read.All",
    "type": "Application",
    "id": "d07a8cc0-3d51-4b77-b3b0-32704d1f69fa"
  },
  {
    "scope": "AccessReview.ReadWrite.All",
    "type": "Delegated",
    "id": "e4aa47b9-9a69-4109-82ed-36ec70d85ff1"
  },
  {
    "scope": "AccessReview.ReadWrite.All",
    "type": "Application",
    "id": "ef5f7d5c-338f-44b0-86c3-351f46c8bb5f"
  },
  {
    "scope": "AccessReview.ReadWrite.Membership",
    "type": "Delegated",
    "id": "5af8c3f5-baca-439a-97b0-ea58a435e269"
  },
  {
    "scope": "AccessReview.ReadWrite.Membership",
    "type": "Application",
    "id": "18228521-a591-40f1-b215-5fad4488c117"
  },
  {
    "scope": "Acronym.Read.All",
    "type": "Delegated",
    "id": "9084c10f-a2d6-4713-8732-348def50fe02"
  },
  {
    "scope": "Acronym.Read.All",
    "type": "Application",
    "id": "8c0aed2c-0c61-433d-b63c-6370ddc73248"
  },
  {
    "scope": "AdministrativeUnit.Read.All",
    "type": "Delegated",
    "id": "3361d15d-be43-4de6-b441-3c746d05163d"
  },
  {
    "scope": "AdministrativeUnit.Read.All",
    "type": "Application",
    "id": "134fd756-38ce-4afd-ba33-e9623dbe66c2"
  },
  {
    "scope": "AdministrativeUnit.ReadWrite.All",
    "type": "Delegated",
    "id": "7b8a2d34-6b3f-4542-a343-54651608ad81"
  },
  {
    "scope": "AdministrativeUnit.ReadWrite.All",
    "type": "Application",
    "id": "5eb59dd3-1da2-4329-8733-9dabdc435916"
  },
  {
    "scope": "Agreement.Read.All",
    "type": "Delegated",
    "id": "af2819c9-df71-4dd3-ade7-4d7c9dc653b7"
  },
  {
    "scope": "Agreement.Read.All",
    "type": "Application",
    "id": "2f3e6f8c-093b-4c57-a58b-ba5ce494a169"
  },
  {
    "scope": "Agreement.ReadWrite.All",
    "type": "Delegated",
    "id": "ef4b5d93-3104-4664-9053-a5c49ab44218"
  },
  {
    "scope": "Agreement.ReadWrite.All",
    "type": "Application",
    "id": "c9090d00-6101-42f0-a729-c41074260d47"
  },
  {
    "scope": "AgreementAcceptance.Read",
    "type": "Delegated",
    "id": "0b7643bb-5336-476f-80b5-18fbfbc91806"
  },
  {
    "scope": "AgreementAcceptance.Read.All",
    "type": "Delegated",
    "id": "a66a5341-e66e-4897-9d52-c2df58c2bfb9"
  },
  {
    "scope": "AgreementAcceptance.Read.All",
    "type": "Application",
    "id": "d8e4ec18-f6c0-4620-8122-c8b1f2bf400e"
  },
  {
    "scope": "Analytics.Read",
    "type": "Delegated",
    "id": "e03cf23f-8056-446a-8994-7d93dfc8b50e"
  },
  {
    "scope": "APIConnectors.Read.All",
    "type": "Delegated",
    "id": "1b6ff35f-31df-4332-8571-d31ea5a4893f"
  },
  {
    "scope": "APIConnectors.Read.All",
    "type": "Application",
    "id": "b86848a7-d5b1-41eb-a9b4-54a4e6306e97"
  },
  {
    "scope": "APIConnectors.ReadWrite.All",
    "type": "Delegated",
    "id": "c67b52c5-7c69-48b6-9d48-7b3af3ded914"
  },
  {
    "scope": "APIConnectors.ReadWrite.All",
    "type": "Application",
    "id": "1dfe531a-24a6-4f1b-80f4-7a0dc5a0a171"
  },
  {
    "scope": "AppCatalog.Read.All",
    "type": "Delegated",
    "id": "88e58d74-d3df-44f3-ad47-e89edf4472e4"
  },
  {
    "scope": "AppCatalog.Read.All",
    "type": "Application",
    "id": "e12dae10-5a57-4817-b79d-dfbec5348930"
  },
  {
    "scope": "AppCatalog.ReadWrite.All",
    "type": "Delegated",
    "id": "1ca167d5-1655-44a1-8adf-1414072e1ef9"
  },
  {
    "scope": "AppCatalog.ReadWrite.All",
    "type": "Application",
    "id": "dc149144-f292-421e-b185-5953f2e98d7f"
  },
  {
    "scope": "AppCatalog.Submit",
    "type": "Delegated",
    "id": "3db89e36-7fa6-4012-b281-85f3d9d9fd2e"
  },
  {
    "scope": "Application.Read.All",
    "type": "Delegated",
    "id": "c79f8feb-a9db-4090-85f9-90d820caa0eb"
  },
  {
    "scope": "Application.Read.All",
    "type": "Application",
    "id": "9a5d68dd-52b0-4cc2-bd40-abcf44ac3a30"
  },
  {
    "scope": "Application.ReadWrite.All",
    "type": "Delegated",
    "id": "bdfbf15f-ee85-4955-8675-146e8e5296b5"
  },
  {
    "scope": "Application.ReadWrite.All",
    "type": "Application",
    "id": "1bfefb4e-e0b5-418b-a88f-73c46d2cc8e9"
  },
  {
    "scope": "Application.ReadWrite.OwnedBy",
    "type": "Application",
    "id": "18a4783c-866b-4cc7-a460-3d5e5662c884"
  },
  {
    "scope": "AppRoleAssignment.ReadWrite.All",
    "type": "Delegated",
    "id": "84bccea3-f856-4a8a-967b-dbe0a3d53a64"
  },
  {
    "scope": "AppRoleAssignment.ReadWrite.All",
    "type": "Application",
    "id": "06b708a9-e830-4db3-a914-8e69da51d44f"
  },
  {
    "scope": "AttackSimulation.Read.All",
    "type": "Delegated",
    "id": "104a7a4b-ca76-4677-b7e7-2f4bc482f381"
  },
  {
    "scope": "AttackSimulation.Read.All",
    "type": "Application",
    "id": "93283d0a-6322-4fa8-966b-8c121624760d"
  },
  {
    "scope": "AttackSimulation.ReadWrite.All",
    "type": "Delegated",
    "id": "27608d7c-2c66-4cad-a657-951d575f5a60"
  },
  {
    "scope": "AttackSimulation.ReadWrite.All",
    "type": "Application",
    "id": "e125258e-8c8a-42a8-8f55-ab502afa52f3"
  },
  {
    "scope": "AuditLog.Read.All",
    "type": "Delegated",
    "id": "e4c9e354-4dc5-45b8-9e7c-e1393b0b1a20"
  },
  {
    "scope": "AuditLog.Read.All",
    "type": "Application",
    "id": "b0afded3-3588-46d8-8b3d-9842eff778da"
  },
  {
    "scope": "AuthenticationContext.Read.All",
    "type": "Delegated",
    "id": "57b030f1-8c35-469c-b0d9-e4a077debe70"
  },
  {
    "scope": "AuthenticationContext.Read.All",
    "type": "Application",
    "id": "381f742f-e1f8-4309-b4ab-e3d91ae4c5c1"
  },
  {
    "scope": "AuthenticationContext.ReadWrite.All",
    "type": "Delegated",
    "id": "ba6d575a-1344-4516-b777-1404f5593057"
  },
  {
    "scope": "AuthenticationContext.ReadWrite.All",
    "type": "Application",
    "id": "a88eef72-fed0-4bf7-a2a9-f19df33f8b83"
  },
  {
    "scope": "BillingConfiguration.ReadWrite.All",
    "type": "Delegated",
    "id": "2bf6d319-dfca-4c22-9879-f88dcfaee6be"
  },
  {
    "scope": "BillingConfiguration.ReadWrite.All",
    "type": "Application",
    "id": "9e8be751-7eee-4c09-bcfd-d64f6b087fd8"
  },
  {
    "scope": "BitlockerKey.Read.All",
    "type": "Delegated",
    "id": "b27a61ec-b99c-4d6a-b126-c4375d08ae30"
  },
  {
    "scope": "BitlockerKey.ReadBasic.All",
    "type": "Delegated",
    "id": "5a107bfc-4f00-4e1a-b67e-66451267bc68"
  },
  {
    "scope": "Bookings.Manage.All",
    "type": "Delegated",
    "id": "7f36b48e-542f-4d3b-9bcb-8406f0ab9fdb"
  },
  {
    "scope": "Bookings.Read.All",
    "type": "Delegated",
    "id": "33b1df99-4b29-4548-9339-7a7b83eaeebc"
  },
  {
    "scope": "Bookings.Read.All",
    "type": "Application",
    "id": "6e98f277-b046-4193-a4f2-6bf6a78cd491"
  },
  {
    "scope": "Bookings.ReadWrite.All",
    "type": "Delegated",
    "id": "948eb538-f19d-4ec5-9ccc-f059e1ea4c72"
  },
  {
    "scope": "BookingsAppointment.ReadWrite.All",
    "type": "Delegated",
    "id": "02a5a114-36a6-46ff-a102-954d89d9ab02"
  },
  {
    "scope": "BookingsAppointment.ReadWrite.All",
    "type": "Application",
    "id": "9769393e-5a9f-4302-9e3d-7e018ecb64a7"
  },
  {
    "scope": "Bookmark.Read.All",
    "type": "Delegated",
    "id": "98b17b35-f3b1-4849-a85f-9f13733002f0"
  },
  {
    "scope": "Bookmark.Read.All",
    "type": "Application",
    "id": "be95e614-8ef3-49eb-8464-1c9503433b86"
  },
  {
    "scope": "BrowserSiteLists.Read.All",
    "type": "Delegated",
    "id": "fb9be2b7-a7fc-4182-aec1-eda4597c43d5"
  },
  {
    "scope": "BrowserSiteLists.Read.All",
    "type": "Application",
    "id": "c5ee1f21-fc7f-4937-9af0-c91648ff9597"
  },
  {
    "scope": "BrowserSiteLists.ReadWrite.All",
    "type": "Delegated",
    "id": "83b34c85-95bf-497b-a04e-b58eca9d49d0"
  },
  {
    "scope": "BrowserSiteLists.ReadWrite.All",
    "type": "Application",
    "id": "8349ca94-3061-44d5-9bfb-33774ea5e4f9"
  },
  {
    "scope": "BusinessScenarioConfig.Read.All",
    "type": "Delegated",
    "id": "d16480b2-e469-4118-846b-d3d177327bee"
  },
  {
    "scope": "BusinessScenarioConfig.Read.OwnedBy",
    "type": "Delegated",
    "id": "c47e7b6e-d6f1-4be9-9ffd-1e00f3e32892"
  },
  {
    "scope": "BusinessScenarioConfig.Read.OwnedBy",
    "type": "Application",
    "id": "acc0fc4d-2cd6-4194-8700-1768d8423d86"
  },
  {
    "scope": "BusinessScenarioConfig.ReadWrite.All",
    "type": "Delegated",
    "id": "755e785b-b658-446f-bb22-5a46abd029ea"
  },
  {
    "scope": "BusinessScenarioConfig.ReadWrite.OwnedBy",
    "type": "Delegated",
    "id": "b3b7fcff-b4d4-4230-bf6f-90bd91285395"
  },
  {
    "scope": "BusinessScenarioConfig.ReadWrite.OwnedBy",
    "type": "Application",
    "id": "bbea195a-4c47-4a4f-bff2-cba399e11698"
  },
  {
    "scope": "BusinessScenarioData.Read.OwnedBy",
    "type": "Delegated",
    "id": "25b265c4-5d34-4e44-952d-b567f6d3b96d"
  },
  {
    "scope": "BusinessScenarioData.Read.OwnedBy",
    "type": "Application",
    "id": "6c0257fd-cffe-415b-8239-2d0d70fdaa9c"
  },
  {
    "scope": "BusinessScenarioData.ReadWrite.OwnedBy",
    "type": "Delegated",
    "id": "19932d57-2952-4c60-8634-3655c79fc527"
  },
  {
    "scope": "BusinessScenarioData.ReadWrite.OwnedBy",
    "type": "Application",
    "id": "f2d21f22-5d80-499e-91cc-0a8a4ce16f54"
  },
  {
    "scope": "Calendars.Read",
    "type": "Delegated",
    "id": "465a38f9-76ea-45b9-9f34-9e8b0d4b0b42"
  },
  {
    "scope": "Calendars.Read",
    "type": "Application",
    "id": "798ee544-9d2d-430c-a058-570e29e34338"
  },
  {
    "scope": "Calendars.Read.Shared",
    "type": "Delegated",
    "id": "2b9c4092-424d-4249-948d-b43879977640"
  },
  {
    "scope": "Calendars.ReadBasic",
    "type": "Delegated",
    "id": "662d75ba-a364-42ad-adee-f5f880ea4878"
  },
  {
    "scope": "Calendars.ReadBasic.All",
    "type": "Application",
    "id": "8ba4a692-bc31-4128-9094-475872af8a53"
  },
  {
    "scope": "Calendars.ReadWrite",
    "type": "Delegated",
    "id": "1ec239c2-d7c9-4623-a91a-a9775856bb36"
  },
  {
    "scope": "Calendars.ReadWrite",
    "type": "Application",
    "id": "ef54d2bf-783f-4e0f-bca1-3210c0444d99"
  },
  {
    "scope": "Calendars.ReadWrite.Shared",
    "type": "Delegated",
    "id": "12466101-c9b8-439a-8589-dd09ee67e8e9"
  },
  {
    "scope": "CallRecord-PstnCalls.Read.All",
    "type": "Application",
    "id": "a2611786-80b3-417e-adaa-707d4261a5f0"
  },
  {
    "scope": "CallRecords.Read.All",
    "type": "Application",
    "id": "45bbb07e-7321-4fd7-a8f6-3ff27e6a81c8"
  },
  {
    "scope": "Calls.AccessMedia.All",
    "type": "Application",
    "id": "a7a681dc-756e-4909-b988-f160edc6655f"
  },
  {
    "scope": "Calls.Initiate.All",
    "type": "Application",
    "id": "284383ee-7f6e-4e40-a2a8-e85dcb029101"
  },
  {
    "scope": "Calls.InitiateGroupCall.All",
    "type": "Application",
    "id": "4c277553-8a09-487b-8023-29ee378d8324"
  },
  {
    "scope": "Calls.JoinGroupCall.All",
    "type": "Application",
    "id": "f6b49018-60ab-4f81-83bd-22caeabfed2d"
  },
  {
    "scope": "Calls.JoinGroupCallAsGuest.All",
    "type": "Application",
    "id": "fd7ccf6b-3d28-418b-9701-cd10f5cd2fd4"
  },
  {
    "scope": "Channel.Create",
    "type": "Delegated",
    "id": "101147cf-4178-4455-9d58-02b5c164e759"
  },
  {
    "scope": "Channel.Create",
    "type": "Application",
    "id": "f3a65bd4-b703-46df-8f7e-0174fea562aa"
  },
  {
    "scope": "Channel.Delete.All",
    "type": "Delegated",
    "id": "cc83893a-e232-4723-b5af-bd0b01bcfe65"
  },
  {
    "scope": "Channel.Delete.All",
    "type": "Application",
    "id": "6a118a39-1227-45d4-af0c-ea7b40d210bc"
  },
  {
    "scope": "Channel.ReadBasic.All",
    "type": "Delegated",
    "id": "9d8982ae-4365-4f57-95e9-d6032a4c0b87"
  },
  {
    "scope": "Channel.ReadBasic.All",
    "type": "Application",
    "id": "59a6b24b-4225-4393-8165-ebaec5f55d7a"
  },
  {
    "scope": "ChannelMember.Read.All",
    "type": "Delegated",
    "id": "2eadaff8-0bce-4198-a6b9-2cfc35a30075"
  },
  {
    "scope": "ChannelMember.Read.All",
    "type": "Application",
    "id": "3b55498e-47ec-484f-8136-9013221c06a9"
  },
  {
    "scope": "ChannelMember.ReadWrite.All",
    "type": "Delegated",
    "id": "0c3e411a-ce45-4cd1-8f30-f99a3efa7b11"
  },
  {
    "scope": "ChannelMember.ReadWrite.All",
    "type": "Application",
    "id": "35930dcf-aceb-4bd1-b99a-8ffed403c974"
  },
  {
    "scope": "ChannelMessage.Edit",
    "type": "Delegated",
    "id": "2b61aa8a-6d36-4b2f-ac7b-f29867937c53"
  },
  {
    "scope": "ChannelMessage.Read.All",
    "type": "Delegated",
    "id": "767156cb-16ae-4d10-8f8b-41b657c8c8c8"
  },
  {
    "scope": "ChannelMessage.Read.All",
    "type": "Application",
    "id": "7b2449af-6ccd-4f4d-9f78-e550c193f0d1"
  },
  {
    "scope": "ChannelMessage.ReadWrite",
    "type": "Delegated",
    "id": "5922d31f-46c8-4404-9eaf-2117e390a8a4"
  },
  {
    "scope": "ChannelMessage.Send",
    "type": "Delegated",
    "id": "ebf0f66e-9fb1-49e4-a278-222f76911cf4"
  },
  {
    "scope": "ChannelMessage.UpdatePolicyViolation.All",
    "type": "Application",
    "id": "4d02b0cc-d90b-441f-8d82-4fb55c34d6bb"
  },
  {
    "scope": "ChannelSettings.Read.All",
    "type": "Delegated",
    "id": "233e0cf1-dd62-48bc-b65b-b38fe87fcf8e"
  },
  {
    "scope": "ChannelSettings.Read.All",
    "type": "Application",
    "id": "c97b873f-f59f-49aa-8a0e-52b32d762124"
  },
  {
    "scope": "ChannelSettings.ReadWrite.All",
    "type": "Delegated",
    "id": "d649fb7c-72b4-4eec-b2b4-b15acf79e378"
  },
  {
    "scope": "ChannelSettings.ReadWrite.All",
    "type": "Application",
    "id": "243cded2-bd16-4fd6-a953-ff8177894c3d"
  },
  {
    "scope": "Chat.Create",
    "type": "Delegated",
    "id": "38826093-1258-4dea-98f0-00003be2b8d0"
  },
  {
    "scope": "Chat.Create",
    "type": "Application",
    "id": "d9c48af6-9ad9-47ad-82c3-63757137b9af"
  },
  {
    "scope": "Chat.Read",
    "type": "Delegated",
    "id": "f501c180-9344-439a-bca0-6cbf209fd270"
  },
  {
    "scope": "Chat.Read.All",
    "type": "Application",
    "id": "6b7d71aa-70aa-4810-a8d9-5d9fb2830017"
  },
  {
    "scope": "Chat.Read.WhereInstalled",
    "type": "Application",
    "id": "1c1b4c8e-3cc7-4c58-8470-9b92c9d5848b"
  },
  {
    "scope": "Chat.ReadBasic",
    "type": "Delegated",
    "id": "9547fcb5-d03f-419d-9948-5928bbf71b0f"
  },
  {
    "scope": "Chat.ReadBasic.All",
    "type": "Application",
    "id": "b2e060da-3baf-4687-9611-f4ebc0f0cbde"
  },
  {
    "scope": "Chat.ReadBasic.WhereInstalled",
    "type": "Application",
    "id": "818ba5bd-5b3e-4fe0-bbe6-aa4686669073"
  },
  {
    "scope": "Chat.ReadWrite",
    "type": "Delegated",
    "id": "9ff7295e-131b-4d94-90e1-69fde507ac11"
  },
  {
    "scope": "Chat.ReadWrite.All",
    "type": "Application",
    "id": "294ce7c9-31ba-490a-ad7d-97a7d075e4ed"
  },
  {
    "scope": "Chat.ReadWrite.WhereInstalled",
    "type": "Application",
    "id": "ad73ce80-f3cd-40ce-b325-df12c33df713"
  },
  {
    "scope": "Chat.UpdatePolicyViolation.All",
    "type": "Application",
    "id": "7e847308-e030-4183-9899-5235d7270f58"
  },
  {
    "scope": "ChatMember.Read",
    "type": "Delegated",
    "id": "c5a9e2b1-faf6-41d4-8875-d381aa549b24"
  },
  {
    "scope": "ChatMember.Read.All",
    "type": "Application",
    "id": "a3410be2-8e48-4f32-8454-c29a7465209d"
  },
  {
    "scope": "ChatMember.Read.WhereInstalled",
    "type": "Application",
    "id": "93e7c9e4-54c5-4a41-b796-f2a5adaacda7"
  },
  {
    "scope": "ChatMember.ReadWrite",
    "type": "Delegated",
    "id": "dea13482-7ea6-488f-8b98-eb5bbecf033d"
  },
  {
    "scope": "ChatMember.ReadWrite.All",
    "type": "Application",
    "id": "57257249-34ce-4810-a8a2-a03adf0c5693"
  },
  {
    "scope": "ChatMember.ReadWrite.WhereInstalled",
    "type": "Application",
    "id": "e32c2cd9-0124-4e44-88fc-772cd98afbdb"
  },
  {
    "scope": "ChatMessage.Read",
    "type": "Delegated",
    "id": "cdcdac3a-fd45-410d-83ef-554db620e5c7"
  },
  {
    "scope": "ChatMessage.Read.All",
    "type": "Application",
    "id": "b9bb2381-47a4-46cd-aafb-00cb12f68504"
  },
  {
    "scope": "ChatMessage.Send",
    "type": "Delegated",
    "id": "116b7235-7cc6-461e-b163-8e55691d839e"
  },
  {
    "scope": "CloudPC.Read.All",
    "type": "Delegated",
    "id": "5252ec4e-fd40-4d92-8c68-89dd1d3c6110"
  },
  {
    "scope": "CloudPC.Read.All",
    "type": "Application",
    "id": "a9e09520-8ed4-4cde-838e-4fdea192c227"
  },
  {
    "scope": "CloudPC.ReadWrite.All",
    "type": "Delegated",
    "id": "9d77138f-f0e2-47ba-ab33-cd246c8b79d1"
  },
  {
    "scope": "CloudPC.ReadWrite.All",
    "type": "Application",
    "id": "3b4349e1-8cf5-45a3-95b7-69d1751d3e6a"
  },
  {
    "scope": "ConsentRequest.Read.All",
    "type": "Delegated",
    "id": "f3bfad56-966e-4590-a536-82ecf548ac1e"
  },
  {
    "scope": "ConsentRequest.Read.All",
    "type": "Application",
    "id": "1260ad83-98fb-4785-abbb-d6cc1806fd41"
  },
  {
    "scope": "ConsentRequest.ReadWrite.All",
    "type": "Delegated",
    "id": "497d9dfa-3bd1-481a-baab-90895e54568c"
  },
  {
    "scope": "ConsentRequest.ReadWrite.All",
    "type": "Application",
    "id": "9f1b81a7-0223-4428-bfa4-0bcb5535f27d"
  },
  {
    "scope": "Contacts.Read",
    "type": "Delegated",
    "id": "ff74d97f-43af-4b68-9f2a-b77ee6968c5d"
  },
  {
    "scope": "Contacts.Read",
    "type": "Application",
    "id": "089fe4d0-434a-44c5-8827-41ba8a0b17f5"
  },
  {
    "scope": "Contacts.Read.Shared",
    "type": "Delegated",
    "id": "242b9d9e-ed24-4d09-9a52-f43769beb9d4"
  },
  {
    "scope": "Contacts.ReadWrite",
    "type": "Delegated",
    "id": "d56682ec-c09e-4743-aaf4-1a3aac4caa21"
  },
  {
    "scope": "Contacts.ReadWrite",
    "type": "Application",
    "id": "6918b873-d17a-4dc1-b314-35f528134491"
  },
  {
    "scope": "Contacts.ReadWrite.Shared",
    "type": "Delegated",
    "id": "afb6c84b-06be-49af-80bb-8f3f77004eab"
  },
  {
    "scope": "CrossTenantInformation.ReadBasic.All",
    "type": "Delegated",
    "id": "81594d25-e88e-49cf-ac8c-fecbff49f994"
  },
  {
    "scope": "CrossTenantInformation.ReadBasic.All",
    "type": "Application",
    "id": "cac88765-0581-4025-9725-5ebc13f729ee"
  },
  {
    "scope": "CrossTenantUserProfileSharing.Read",
    "type": "Delegated",
    "id": "cb1ba48f-d22b-4325-a07f-74135a62ee41"
  },
  {
    "scope": "CrossTenantUserProfileSharing.Read.All",
    "type": "Delegated",
    "id": "759dcd16-3c90-463c-937e-abf89f991c18"
  },
  {
    "scope": "CrossTenantUserProfileSharing.Read.All",
    "type": "Application",
    "id": "8b919d44-6192-4f3d-8a3b-f86f8069ae3c"
  },
  {
    "scope": "CrossTenantUserProfileSharing.ReadWrite",
    "type": "Delegated",
    "id": "eed0129d-dc60-4f30-8641-daf337a39ffd"
  },
  {
    "scope": "CrossTenantUserProfileSharing.ReadWrite.All",
    "type": "Delegated",
    "id": "64dfa325-cbf8-48e3-938d-51224a0cac01"
  },
  {
    "scope": "CrossTenantUserProfileSharing.ReadWrite.All",
    "type": "Application",
    "id": "306785c5-c09b-4ba0-a4ee-023f3da165cb"
  },
  {
    "scope": "CustomAuthenticationExtension.Read.All",
    "type": "Delegated",
    "id": "b2052569-c98c-4f36-a5fb-43e5c111e6d0"
  },
  {
    "scope": "CustomAuthenticationExtension.Read.All",
    "type": "Application",
    "id": "88bb2658-5d9e-454f-aacd-a3933e079526"
  },
  {
    "scope": "CustomAuthenticationExtension.ReadWrite.All",
    "type": "Delegated",
    "id": "8dfcf82f-15d0-43b3-bc78-a958a13a5792"
  },
  {
    "scope": "CustomAuthenticationExtension.ReadWrite.All",
    "type": "Application",
    "id": "c2667967-7050-4e7e-b059-4cbbb3811d03"
  },
  {
    "scope": "CustomAuthenticationExtension.Receive.Payload",
    "type": "Application",
    "id": "214e810f-fda8-4fd7-a475-29461495eb00"
  },
  {
    "scope": "CustomSecAttributeAssignment.Read.All",
    "type": "Delegated",
    "id": "b46ffa80-fe3d-4822-9a1a-c200932d54d0"
  },
  {
    "scope": "CustomSecAttributeAssignment.Read.All",
    "type": "Application",
    "id": "3b37c5a4-1226-493d-bec3-5d6c6b866f3f"
  },
  {
    "scope": "CustomSecAttributeAssignment.ReadWrite.All",
    "type": "Delegated",
    "id": "ca46335e-8453-47cd-a001-8459884efeae"
  },
  {
    "scope": "CustomSecAttributeAssignment.ReadWrite.All",
    "type": "Application",
    "id": "de89b5e4-5b8f-48eb-8925-29c2b33bd8bd"
  },
  {
    "scope": "CustomSecAttributeDefinition.Read.All",
    "type": "Delegated",
    "id": "ce026878-a0ff-4745-a728-d4fedd086c07"
  },
  {
    "scope": "CustomSecAttributeDefinition.Read.All",
    "type": "Application",
    "id": "b185aa14-d8d2-42c1-a685-0f5596613624"
  },
  {
    "scope": "CustomSecAttributeDefinition.ReadWrite.All",
    "type": "Delegated",
    "id": "8b0160d4-5743-482b-bb27-efc0a485ca4a"
  },
  {
    "scope": "CustomSecAttributeDefinition.ReadWrite.All",
    "type": "Application",
    "id": "12338004-21f4-4896-bf5e-b75dfaf1016d"
  },
  {
    "scope": "DelegatedAdminRelationship.Read.All",
    "type": "Delegated",
    "id": "0c0064ea-477b-4130-82a5-4c2cc4ff68aa"
  },
  {
    "scope": "DelegatedAdminRelationship.Read.All",
    "type": "Application",
    "id": "f6e9e124-4586-492f-adc0-c6f96e4823fd"
  },
  {
    "scope": "DelegatedAdminRelationship.ReadWrite.All",
    "type": "Delegated",
    "id": "885f682f-a990-4bad-a642-36736a74b0c7"
  },
  {
    "scope": "DelegatedAdminRelationship.ReadWrite.All",
    "type": "Application",
    "id": "cc13eba4-8cd8-44c6-b4d4-f93237adce58"
  },
  {
    "scope": "DelegatedPermissionGrant.ReadWrite.All",
    "type": "Delegated",
    "id": "41ce6ca6-6826-4807-84f1-1c82854f7ee5"
  },
  {
    "scope": "DelegatedPermissionGrant.ReadWrite.All",
    "type": "Application",
    "id": "8e8e4742-1d95-4f68-9d56-6ee75648c72a"
  },
  {
    "scope": "Device.Command",
    "type": "Delegated",
    "id": "bac3b9c2-b516-4ef4-bd3b-c2ef73d8d804"
  },
  {
    "scope": "Device.Read",
    "type": "Delegated",
    "id": "11d4cd79-5ba5-460f-803f-e22c8ab85ccd"
  },
  {
    "scope": "Device.Read.All",
    "type": "Delegated",
    "id": "951183d1-1a61-466f-a6d1-1fde911bfd95"
  },
  {
    "scope": "Device.Read.All",
    "type": "Application",
    "id": "7438b122-aefc-4978-80ed-43db9fcc7715"
  },
  {
    "scope": "Device.ReadWrite.All",
    "type": "Application",
    "id": "1138cb37-bd11-4084-a2b7-9f71582aeddb"
  },
  {
    "scope": "DeviceLocalCredential.Read.All",
    "type": "Delegated",
    "id": "280b3b69-0437-44b1-bc20-3b2fca1ee3e9"
  },
  {
    "scope": "DeviceLocalCredential.Read.All",
    "type": "Application",
    "id": "884b599e-4d48-43a5-ba94-15c414d00588"
  },
  {
    "scope": "DeviceLocalCredential.ReadBasic.All",
    "type": "Delegated",
    "id": "9917900e-410b-4d15-846e-42a357488545"
  },
  {
    "scope": "DeviceLocalCredential.ReadBasic.All",
    "type": "Application",
    "id": "db51be59-e728-414b-b800-e0f010df1a79"
  },
  {
    "scope": "DeviceManagementApps.Read.All",
    "type": "Delegated",
    "id": "4edf5f54-4666-44af-9de9-0144fb4b6e8c"
  },
  {
    "scope": "DeviceManagementApps.Read.All",
    "type": "Application",
    "id": "7a6ee1e7-141e-4cec-ae74-d9db155731ff"
  },
  {
    "scope": "DeviceManagementApps.ReadWrite.All",
    "type": "Delegated",
    "id": "7b3f05d5-f68c-4b8d-8c59-a2ecd12f24af"
  },
  {
    "scope": "DeviceManagementApps.ReadWrite.All",
    "type": "Application",
    "id": "78145de6-330d-4800-a6ce-494ff2d33d07"
  },
  {
    "scope": "DeviceManagementConfiguration.Read.All",
    "type": "Delegated",
    "id": "f1493658-876a-4c87-8fa7-edb559b3476a"
  },
  {
    "scope": "DeviceManagementConfiguration.Read.All",
    "type": "Application",
    "id": "dc377aa6-52d8-4e23-b271-2a7ae04cedf3"
  },
  {
    "scope": "DeviceManagementConfiguration.ReadWrite.All",
    "type": "Delegated",
    "id": "0883f392-0a7a-443d-8c76-16a6d39c7b63"
  },
  {
    "scope": "DeviceManagementConfiguration.ReadWrite.All",
    "type": "Application",
    "id": "9241abd9-d0e6-425a-bd4f-47ba86e767a4"
  },
  {
    "scope": "DeviceManagementManagedDevices.PrivilegedOperations.All",
    "type": "Delegated",
    "id": "3404d2bf-2b13-457e-a330-c24615765193"
  },
  {
    "scope": "DeviceManagementManagedDevices.PrivilegedOperations.All",
    "type": "Application",
    "id": "5b07b0dd-2377-4e44-a38d-703f09a0dc3c"
  },
  {
    "scope": "DeviceManagementManagedDevices.Read.All",
    "type": "Delegated",
    "id": "314874da-47d6-4978-88dc-cf0d37f0bb82"
  },
  {
    "scope": "DeviceManagementManagedDevices.Read.All",
    "type": "Application",
    "id": "2f51be20-0bb4-4fed-bf7b-db946066c75e"
  },
  {
    "scope": "DeviceManagementManagedDevices.ReadWrite.All",
    "type": "Delegated",
    "id": "44642bfe-8385-4adc-8fc6-fe3cb2c375c3"
  },
  {
    "scope": "DeviceManagementManagedDevices.ReadWrite.All",
    "type": "Application",
    "id": "243333ab-4d21-40cb-a475-36241daa0842"
  },
  {
    "scope": "DeviceManagementRBAC.Read.All",
    "type": "Delegated",
    "id": "49f0cc30-024c-4dfd-ab3e-82e137ee5431"
  },
  {
    "scope": "DeviceManagementRBAC.Read.All",
    "type": "Application",
    "id": "58ca0d9a-1575-47e1-a3cb-007ef2e4583b"
  },
  {
    "scope": "DeviceManagementRBAC.ReadWrite.All",
    "type": "Delegated",
    "id": "0c5e8a55-87a6-4556-93ab-adc52c4d862d"
  },
  {
    "scope": "DeviceManagementRBAC.ReadWrite.All",
    "type": "Application",
    "id": "e330c4f0-4170-414e-a55a-2f022ec2b57b"
  },
  {
    "scope": "DeviceManagementServiceConfig.Read.All",
    "type": "Delegated",
    "id": "8696daa5-bce5-4b2e-83f9-51b6defc4e1e"
  },
  {
    "scope": "DeviceManagementServiceConfig.Read.All",
    "type": "Application",
    "id": "06a5fe6d-c49d-46a7-b082-56b1b14103c7"
  },
  {
    "scope": "DeviceManagementServiceConfig.ReadWrite.All",
    "type": "Delegated",
    "id": "662ed50a-ac44-4eef-ad86-62eed9be2a29"
  },
  {
    "scope": "DeviceManagementServiceConfig.ReadWrite.All",
    "type": "Application",
    "id": "5ac13192-7ace-4fcf-b828-1a26f28068ee"
  },
  {
    "scope": "DigitalHealthSettings.Read",
    "type": "Delegated",
    "id": "c3ba73cd-1333-4ac0-9eb6-da00cf298dad"
  },
  {
    "scope": "Directory.AccessAsUser.All",
    "type": "Delegated",
    "id": "0e263e50-5827-48a4-b97c-d940288653c7"
  },
  {
    "scope": "Directory.Read.All",
    "type": "Delegated",
    "id": "06da0dbc-49e2-44d2-8312-53f166ab848a"
  },
  {
    "scope": "Directory.Read.All",
    "type": "Application",
    "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61"
  },
  {
    "scope": "Directory.ReadWrite.All",
    "type": "Delegated",
    "id": "c5366453-9fb0-48a5-a156-24f0c49a4b84"
  },
  {
    "scope": "Directory.ReadWrite.All",
    "type": "Application",
    "id": "19dbc75e-c2e2-444c-a770-ec69d8559fc7"
  },
  {
    "scope": "Directory.Write.Restricted",
    "type": "Delegated",
    "id": "cba5390f-ed6a-4b7f-b657-0efc2210ed20"
  },
  {
    "scope": "Directory.Write.Restricted",
    "type": "Application",
    "id": "f20584af-9290-4153-9280-ff8bb2c0ea7f"
  },
  {
    "scope": "DirectoryRecommendations.Read.All",
    "type": "Delegated",
    "id": "34d3bd24-f6a6-468c-b67c-0c365c1d6410"
  },
  {
    "scope": "DirectoryRecommendations.Read.All",
    "type": "Application",
    "id": "ae73097b-cb2a-4447-b064-5d80f6093921"
  },
  {
    "scope": "DirectoryRecommendations.ReadWrite.All",
    "type": "Delegated",
    "id": "f37235e8-90a0-4189-93e2-e55b53867ccd"
  },
  {
    "scope": "DirectoryRecommendations.ReadWrite.All",
    "type": "Application",
    "id": "0e9eea12-4f01-45f6-9b8d-3ea4c8144158"
  },
  {
    "scope": "Domain.Read.All",
    "type": "Delegated",
    "id": "2f9ee017-59c1-4f1d-9472-bd5529a7b311"
  },
  {
    "scope": "Domain.Read.All",
    "type": "Application",
    "id": "dbb9058a-0e50-45d7-ae91-66909b5d4664"
  },
  {
    "scope": "Domain.ReadWrite.All",
    "type": "Delegated",
    "id": "0b5d694c-a244-4bde-86e6-eb5cd07730fe"
  },
  {
    "scope": "Domain.ReadWrite.All",
    "type": "Application",
    "id": "7e05723c-0bb0-42da-be95-ae9f08a6e53c"
  },
  {
    "scope": "EAS.AccessAsUser.All",
    "type": "Delegated",
    "id": "ff91d191-45a0-43fd-b837-bd682c4a0b0f"
  },
  {
    "scope": "eDiscovery.Read.All",
    "type": "Delegated",
    "id": "99201db3-7652-4d5a-809a-bdb94f85fe3c"
  },
  {
    "scope": "eDiscovery.Read.All",
    "type": "Application",
    "id": "50180013-6191-4d1e-a373-e590ff4e66af"
  },
  {
    "scope": "eDiscovery.ReadWrite.All",
    "type": "Delegated",
    "id": "acb8f680-0834-4146-b69e-4ab1b39745ad"
  },
  {
    "scope": "eDiscovery.ReadWrite.All",
    "type": "Application",
    "id": "b2620db1-3bf7-4c5b-9cb9-576d29eac736"
  },
  {
    "scope": "EduAdministration.Read",
    "type": "Delegated",
    "id": "8523895c-6081-45bf-8a5d-f062a2f12c9f"
  },
  {
    "scope": "EduAdministration.Read.All",
    "type": "Application",
    "id": "7c9db06a-ec2d-4e7b-a592-5a1e30992566"
  },
  {
    "scope": "EduAdministration.ReadWrite",
    "type": "Delegated",
    "id": "63589852-04e3-46b4-bae9-15d5b1050748"
  },
  {
    "scope": "EduAdministration.ReadWrite.All",
    "type": "Application",
    "id": "9bc431c3-b8bc-4a8d-a219-40f10f92eff6"
  },
  {
    "scope": "EduAssignments.Read",
    "type": "Delegated",
    "id": "091460c9-9c4a-49b2-81ef-1f3d852acce2"
  },
  {
    "scope": "EduAssignments.Read.All",
    "type": "Application",
    "id": "4c37e1b6-35a1-43bf-926a-6f30f2cdf585"
  },
  {
    "scope": "EduAssignments.ReadBasic",
    "type": "Delegated",
    "id": "c0b0103b-c053-4b2e-9973-9f3a544ec9b8"
  },
  {
    "scope": "EduAssignments.ReadBasic.All",
    "type": "Application",
    "id": "6e0a958b-b7fc-4348-b7c4-a6ab9fd3dd0e"
  },
  {
    "scope": "EduAssignments.ReadWrite",
    "type": "Delegated",
    "id": "2f233e90-164b-4501-8bce-31af2559a2d3"
  },
  {
    "scope": "EduAssignments.ReadWrite.All",
    "type": "Application",
    "id": "0d22204b-6cad-4dd0-8362-3e3f2ae699d9"
  },
  {
    "scope": "EduAssignments.ReadWriteBasic",
    "type": "Delegated",
    "id": "2ef770a1-622a-47c4-93ee-28d6adbed3a0"
  },
  {
    "scope": "EduAssignments.ReadWriteBasic.All",
    "type": "Application",
    "id": "f431cc63-a2de-48c4-8054-a34bc093af84"
  },
  {
    "scope": "EduRoster.Read",
    "type": "Delegated",
    "id": "a4389601-22d9-4096-ac18-36a927199112"
  },
  {
    "scope": "EduRoster.Read.All",
    "type": "Application",
    "id": "e0ac9e1b-cb65-4fc5-87c5-1a8bc181f648"
  },
  {
    "scope": "EduRoster.ReadBasic",
    "type": "Delegated",
    "id": "5d186531-d1bf-4f07-8cea-7c42119e1bd9"
  },
  {
    "scope": "EduRoster.ReadBasic.All",
    "type": "Application",
    "id": "0d412a8c-a06c-439f-b3ec-8abcf54d2f96"
  },
  {
    "scope": "EduRoster.ReadWrite",
    "type": "Delegated",
    "id": "359e19a6-e3fa-4d7f-bcab-d28ec592b51e"
  },
  {
    "scope": "EduRoster.ReadWrite.All",
    "type": "Application",
    "id": "d1808e82-ce13-47af-ae0d-f9b254e6d58a"
  },
  {
    "scope": "email",
    "type": "Delegated",
    "id": "64a6cdd6-aab1-4aaf-94b8-3cc8405e90d0"
  },
  {
    "scope": "EntitlementManagement.Read.All",
    "type": "Delegated",
    "id": "5449aa12-1393-4ea2-a7c7-d0e06c1a56b2"
  },
  {
    "scope": "EntitlementManagement.Read.All",
    "type": "Application",
    "id": "c74fd47d-ed3c-45c3-9a9e-b8676de685d2"
  },
  {
    "scope": "EntitlementManagement.ReadWrite.All",
    "type": "Delegated",
    "id": "ae7a573d-81d7-432b-ad44-4ed5c9d89038"
  },
  {
    "scope": "EntitlementManagement.ReadWrite.All",
    "type": "Application",
    "id": "9acd699f-1e81-4958-b001-93b1d2506e19"
  },
  {
    "scope": "EntitlementMgmt-SubjectAccess.ReadWrite",
    "type": "Delegated",
    "id": "e9fdcbbb-8807-410f-b9ec-8d5468c7c2ac"
  },
  {
    "scope": "EventListener.Read.All",
    "type": "Delegated",
    "id": "f7dd3bed-5eec-48da-bc73-1c0ef50bc9a1"
  },
  {
    "scope": "EventListener.Read.All",
    "type": "Application",
    "id": "b7f6385c-6ce6-4639-a480-e23c42ed9784"
  },
  {
    "scope": "EventListener.ReadWrite.All",
    "type": "Delegated",
    "id": "d11625a6-fe21-4fc6-8d3d-063eba5525ad"
  },
  {
    "scope": "EventListener.ReadWrite.All",
    "type": "Application",
    "id": "0edf5e9e-4ce8-468a-8432-d08631d18c43"
  },
  {
    "scope": "EWS.AccessAsUser.All",
    "type": "Delegated",
    "id": "9769c687-087d-48ac-9cb3-c37dde652038"
  },
  {
    "scope": "ExternalConnection.Read.All",
    "type": "Delegated",
    "id": "a38267a5-26b6-4d76-9493-935b7599116b"
  },
  {
    "scope": "ExternalConnection.Read.All",
    "type": "Application",
    "id": "1914711b-a1cb-4793-b019-c2ce0ed21b8c"
  },
  {
    "scope": "ExternalConnection.ReadWrite.All",
    "type": "Delegated",
    "id": "bbbbd9b3-3566-4931-ac37-2b2180d9e334"
  },
  {
    "scope": "ExternalConnection.ReadWrite.All",
    "type": "Application",
    "id": "34c37bc0-2b40-4d5e-85e1-2365cd256d79"
  },
  {
    "scope": "ExternalConnection.ReadWrite.OwnedBy",
    "type": "Delegated",
    "id": "4082ad95-c812-4f02-be92-780c4c4f1830"
  },
  {
    "scope": "ExternalConnection.ReadWrite.OwnedBy",
    "type": "Application",
    "id": "f431331c-49a6-499f-be1c-62af19c34a9d"
  },
  {
    "scope": "ExternalItem.Read.All",
    "type": "Delegated",
    "id": "922f9392-b1b7-483c-a4be-0089be7704fb"
  },
  {
    "scope": "ExternalItem.Read.All",
    "type": "Application",
    "id": "7a7cffad-37d2-4f48-afa4-c6ab129adcc2"
  },
  {
    "scope": "ExternalItem.ReadWrite.All",
    "type": "Delegated",
    "id": "b02c54f8-eb48-4c50-a9f0-a149e5a2012f"
  },
  {
    "scope": "ExternalItem.ReadWrite.All",
    "type": "Application",
    "id": "38c3d6ee-69ee-422f-b954-e17819665354"
  },
  {
    "scope": "ExternalItem.ReadWrite.OwnedBy",
    "type": "Delegated",
    "id": "4367b9d7-cee7-4995-853c-a0bdfe95c1f9"
  },
  {
    "scope": "ExternalItem.ReadWrite.OwnedBy",
    "type": "Application",
    "id": "8116ae0f-55c2-452d-9944-d18420f5b2c8"
  },
  {
    "scope": "Family.Read",
    "type": "Delegated",
    "id": "3a1e4806-a744-4c70-80fc-223bf8582c46"
  },
  {
    "scope": "Files.Read",
    "type": "Delegated",
    "id": "10465720-29dd-4523-a11a-6a75c743c9d9"
  },
  {
    "scope": "Files.Read.All",
    "type": "Delegated",
    "id": "df85f4d6-205c-4ac5-a5ea-6bf408dba283"
  },
  {
    "scope": "Files.Read.All",
    "type": "Application",
    "id": "01d4889c-1287-42c6-ac1f-5d1e02578ef6"
  },
  {
    "scope": "Files.Read.Selected",
    "type": "Delegated",
    "id": "5447fe39-cb82-4c1a-b977-520e67e724eb"
  },
  {
    "scope": "Files.ReadWrite",
    "type": "Delegated",
    "id": "5c28f0bf-8a70-41f1-8ab2-9032436ddb65"
  },
  {
    "scope": "Files.ReadWrite.All",
    "type": "Delegated",
    "id": "863451e7-0667-486c-a5d6-d135439485f0"
  },
  {
    "scope": "Files.ReadWrite.All",
    "type": "Application",
    "id": "75359482-378d-4052-8f01-80520e7db3cd"
  },
  {
    "scope": "Files.ReadWrite.AppFolder",
    "type": "Delegated",
    "id": "8019c312-3263-48e6-825e-2b833497195b"
  },
  {
    "scope": "Files.ReadWrite.Selected",
    "type": "Delegated",
    "id": "17dde5bd-8c17-420f-a486-969730c1b827"
  },
  {
    "scope": "Financials.ReadWrite.All",
    "type": "Delegated",
    "id": "f534bf13-55d4-45a9-8f3c-c92fe64d6131"
  },
  {
    "scope": "Group.Create",
    "type": "Application",
    "id": "bf7b1a76-6e77-406b-b258-bf5c7720e98f"
  },
  {
    "scope": "Group.Read.All",
    "type": "Delegated",
    "id": "5f8c59db-677d-491f-a6b8-5f174b11ec1d"
  },
  {
    "scope": "Group.Read.All",
    "type": "Application",
    "id": "5b567255-7703-4780-807c-7be8301ae99b"
  },
  {
    "scope": "Group.ReadWrite.All",
    "type": "Delegated",
    "id": "4e46008b-f24c-477d-8fff-7bb4ec7aafe0"
  },
  {
    "scope": "Group.ReadWrite.All",
    "type": "Application",
    "id": "62a82d76-70ea-41e2-9197-370581804d09"
  },
  {
    "scope": "GroupMember.Read.All",
    "type": "Delegated",
    "id": "bc024368-1153-4739-b217-4326f2e966d0"
  },
  {
    "scope": "GroupMember.Read.All",
    "type": "Application",
    "id": "98830695-27a2-44f7-8c18-0c3ebc9698f6"
  },
  {
    "scope": "GroupMember.ReadWrite.All",
    "type": "Delegated",
    "id": "f81125ac-d3b7-4573-a3b2-7099cc39df9e"
  },
  {
    "scope": "GroupMember.ReadWrite.All",
    "type": "Application",
    "id": "dbaae8cf-10b5-4b86-a4a1-f871c94c6695"
  },
  {
    "scope": "IdentityProvider.Read.All",
    "type": "Delegated",
    "id": "43781733-b5a7-4d1b-98f4-e8edff23e1a9"
  },
  {
    "scope": "IdentityProvider.Read.All",
    "type": "Application",
    "id": "e321f0bb-e7f7-481e-bb28-e3b0b32d4bd0"
  },
  {
    "scope": "IdentityProvider.ReadWrite.All",
    "type": "Delegated",
    "id": "f13ce604-1677-429f-90bd-8a10b9f01325"
  },
  {
    "scope": "IdentityProvider.ReadWrite.All",
    "type": "Application",
    "id": "90db2b9a-d928-4d33-a4dd-8442ae3d41e4"
  },
  {
    "scope": "IdentityRiskEvent.Read.All",
    "type": "Delegated",
    "id": "8f6a01e7-0391-4ee5-aa22-a3af122cef27"
  },
  {
    "scope": "IdentityRiskEvent.Read.All",
    "type": "Application",
    "id": "6e472fd1-ad78-48da-a0f0-97ab2c6b769e"
  },
  {
    "scope": "IdentityRiskEvent.ReadWrite.All",
    "type": "Delegated",
    "id": "9e4862a5-b68f-479e-848a-4e07e25c9916"
  },
  {
    "scope": "IdentityRiskEvent.ReadWrite.All",
    "type": "Application",
    "id": "db06fb33-1953-4b7b-a2ac-f1e2c854f7ae"
  },
  {
    "scope": "IdentityRiskyServicePrincipal.Read.All",
    "type": "Delegated",
    "id": "ea5c4ab0-5a73-4f35-8272-5d5337884e5d"
  },
  {
    "scope": "IdentityRiskyServicePrincipal.Read.All",
    "type": "Application",
    "id": "607c7344-0eed-41e5-823a-9695ebe1b7b0"
  },
  {
    "scope": "IdentityRiskyServicePrincipal.ReadWrite.All",
    "type": "Delegated",
    "id": "bb6f654c-d7fd-4ae3-85c3-fc380934f515"
  },
  {
    "scope": "IdentityRiskyServicePrincipal.ReadWrite.All",
    "type": "Application",
    "id": "cb8d6980-6bcb-4507-afec-ed6de3a2d798"
  },
  {
    "scope": "IdentityRiskyUser.Read.All",
    "type": "Delegated",
    "id": "d04bb851-cb7c-4146-97c7-ca3e71baf56c"
  },
  {
    "scope": "IdentityRiskyUser.Read.All",
    "type": "Application",
    "id": "dc5007c0-2d7d-4c42-879c-2dab87571379"
  },
  {
    "scope": "IdentityRiskyUser.ReadWrite.All",
    "type": "Delegated",
    "id": "e0a7cdbb-08b0-4697-8264-0069786e9674"
  },
  {
    "scope": "IdentityRiskyUser.ReadWrite.All",
    "type": "Application",
    "id": "656f6061-f9fe-4807-9708-6a2e0934df76"
  },
  {
    "scope": "IdentityUserFlow.Read.All",
    "type": "Delegated",
    "id": "2903d63d-4611-4d43-99ce-a33f3f52e343"
  },
  {
    "scope": "IdentityUserFlow.Read.All",
    "type": "Application",
    "id": "1b0c317f-dd31-4305-9932-259a8b6e8099"
  },
  {
    "scope": "IdentityUserFlow.ReadWrite.All",
    "type": "Delegated",
    "id": "281892cc-4dbf-4e3a-b6cc-b21029bb4e82"
  },
  {
    "scope": "IdentityUserFlow.ReadWrite.All",
    "type": "Application",
    "id": "65319a09-a2be-469d-8782-f6b07debf789"
  },
  {
    "scope": "IMAP.AccessAsUser.All",
    "type": "Delegated",
    "id": "652390e4-393a-48de-9484-05f9b1212954"
  },
  {
    "scope": "IndustryData.ReadBasic.All",
    "type": "Delegated",
    "id": "60382b96-1f5e-46ea-a544-0407e489e588"
  },
  {
    "scope": "IndustryData.ReadBasic.All",
    "type": "Application",
    "id": "4f5ac95f-62fd-472c-b60f-125d24ca0bc5"
  },
  {
    "scope": "IndustryData-DataConnector.Read.All",
    "type": "Delegated",
    "id": "d19c0de5-7ecb-4aba-b090-da35ebcd5425"
  },
  {
    "scope": "IndustryData-DataConnector.Read.All",
    "type": "Application",
    "id": "7ab52c2f-a2ee-4d98-9ebc-725e3934aae2"
  },
  {
    "scope": "IndustryData-DataConnector.ReadWrite.All",
    "type": "Delegated",
    "id": "5ce933ac-3997-4280-aed0-cc072e5c062a"
  },
  {
    "scope": "IndustryData-DataConnector.ReadWrite.All",
    "type": "Application",
    "id": "eda0971c-482e-4345-b28f-69c309cb8a34"
  },
  {
    "scope": "IndustryData-DataConnector.Upload",
    "type": "Delegated",
    "id": "fc47391d-ab2c-410f-9059-5600f7af660d"
  },
  {
    "scope": "IndustryData-DataConnector.Upload",
    "type": "Application",
    "id": "9334c44b-a7c6-4350-8036-6bf8e02b4c1f"
  },
  {
    "scope": "IndustryData-InboundFlow.Read.All",
    "type": "Delegated",
    "id": "cb0774da-a605-42af-959c-32f438fb38f4"
  },
  {
    "scope": "IndustryData-InboundFlow.Read.All",
    "type": "Application",
    "id": "305f6ba2-049a-4b1b-88bb-fe7e08758a00"
  },
  {
    "scope": "IndustryData-InboundFlow.ReadWrite.All",
    "type": "Delegated",
    "id": "97044676-2cec-40ee-bd70-38df444c9e70"
  },
  {
    "scope": "IndustryData-InboundFlow.ReadWrite.All",
    "type": "Application",
    "id": "e688c61f-d4c6-4d64-a197-3bcf6ba1d6ad"
  },
  {
    "scope": "IndustryData-ReferenceDefinition.Read.All",
    "type": "Delegated",
    "id": "a3f96ffe-cb84-40a8-ac85-582d7ef97c2a"
  },
  {
    "scope": "IndustryData-ReferenceDefinition.Read.All",
    "type": "Application",
    "id": "6ee891c3-74a4-4148-8463-0c834375dfaf"
  },
  {
    "scope": "IndustryData-Run.Read.All",
    "type": "Delegated",
    "id": "92685235-50c4-4702-b2c8-36043db6fa79"
  },
  {
    "scope": "IndustryData-Run.Read.All",
    "type": "Application",
    "id": "f6f5d10b-3024-4d1d-b674-aae4df4a1a73"
  },
  {
    "scope": "IndustryData-SourceSystem.Read.All",
    "type": "Delegated",
    "id": "49b7016c-89ae-41e7-bd6f-b7170c5490bf"
  },
  {
    "scope": "IndustryData-SourceSystem.Read.All",
    "type": "Application",
    "id": "bc167a60-39fe-4865-8b44-78400fc6ed03"
  },
  {
    "scope": "IndustryData-SourceSystem.ReadWrite.All",
    "type": "Delegated",
    "id": "9599f005-05d6-4ea7-b1b1-4929768af5d0"
  },
  {
    "scope": "IndustryData-SourceSystem.ReadWrite.All",
    "type": "Application",
    "id": "7d866958-e06e-4dd6-91c6-a086b3f5cfeb"
  },
  {
    "scope": "IndustryData-TimePeriod.Read.All",
    "type": "Delegated",
    "id": "c9d51f28-8ccd-42b2-a836-fd8fe9ebf2ae"
  },
  {
    "scope": "IndustryData-TimePeriod.Read.All",
    "type": "Application",
    "id": "7c55c952-b095-4c23-a522-022bce4cc1e3"
  },
  {
    "scope": "IndustryData-TimePeriod.ReadWrite.All",
    "type": "Delegated",
    "id": "b6d56528-3032-4f9d-830f-5a24a25e6661"
  },
  {
    "scope": "IndustryData-TimePeriod.ReadWrite.All",
    "type": "Application",
    "id": "7afa7744-a782-4a32-b8c2-e3db637e8de7"
  },
  {
    "scope": "InformationProtectionContent.Sign.All",
    "type": "Application",
    "id": "cbe6c7e4-09aa-4b8d-b3c3-2dbb59af4b54"
  },
  {
    "scope": "InformationProtectionContent.Write.All",
    "type": "Application",
    "id": "287bd98c-e865-4e8c-bade-1a85523195b9"
  },
  {
    "scope": "InformationProtectionPolicy.Read",
    "type": "Delegated",
    "id": "4ad84827-5578-4e18-ad7a-86530b12f884"
  },
  {
    "scope": "InformationProtectionPolicy.Read.All",
    "type": "Application",
    "id": "19da66cb-0fb0-4390-b071-ebc76a349482"
  },
  {
    "scope": "LearningContent.Read.All",
    "type": "Delegated",
    "id": "ea4c1fd9-6a9f-4432-8e5d-86e06cc0da77"
  },
  {
    "scope": "LearningContent.Read.All",
    "type": "Application",
    "id": "8740813e-d8aa-4204-860e-2a0f8f84dbc8"
  },
  {
    "scope": "LearningContent.ReadWrite.All",
    "type": "Delegated",
    "id": "53cec1c4-a65f-4981-9dc1-ad75dbf1c077"
  },
  {
    "scope": "LearningContent.ReadWrite.All",
    "type": "Application",
    "id": "444d6fcb-b738-41e5-b103-ac4f2a2628a3"
  },
  {
    "scope": "LearningProvider.Read",
    "type": "Delegated",
    "id": "dd8ce36f-9245-45ea-a99e-8ac398c22861"
  },
  {
    "scope": "LearningProvider.ReadWrite",
    "type": "Delegated",
    "id": "40c2eb57-abaf-49f5-9331-e90fd01f7130"
  },
  {
    "scope": "LicenseAssignment.ReadWrite.All",
    "type": "Delegated",
    "id": "f55016cc-149c-447e-8f21-7cf3ec1d6350"
  },
  {
    "scope": "LicenseAssignment.ReadWrite.All",
    "type": "Application",
    "id": "5facf0c1-8979-4e95-abcf-ff3d079771c0"
  },
  {
    "scope": "LifecycleWorkflows.Read.All",
    "type": "Delegated",
    "id": "9bcb9916-765a-42af-bf77-02282e26b01a"
  },
  {
    "scope": "LifecycleWorkflows.Read.All",
    "type": "Application",
    "id": "7c67316a-232a-4b84-be22-cea2c0906404"
  },
  {
    "scope": "LifecycleWorkflows.ReadWrite.All",
    "type": "Delegated",
    "id": "84b9d731-7db8-4454-8c90-fd9e95350179"
  },
  {
    "scope": "LifecycleWorkflows.ReadWrite.All",
    "type": "Application",
    "id": "5c505cf4-8424-4b8e-aa14-ee06e3bb23e3"
  },
  {
    "scope": "Mail.Read",
    "type": "Delegated",
    "id": "570282fd-fa5c-430d-a7fd-fc8dc98a9dca"
  },
  {
    "scope": "Mail.Read",
    "type": "Application",
    "id": "810c84a8-4a9e-49e6-bf7d-12d183f40d01"
  },
  {
    "scope": "Mail.Read.Shared",
    "type": "Delegated",
    "id": "7b9103a5-4610-446b-9670-80643382c1fa"
  },
  {
    "scope": "Mail.ReadBasic",
    "type": "Delegated",
    "id": "a4b8392a-d8d1-4954-a029-8e668a39a170"
  },
  {
    "scope": "Mail.ReadBasic",
    "type": "Application",
    "id": "6be147d2-ea4f-4b5a-a3fa-3eab6f3c140a"
  },
  {
    "scope": "Mail.ReadBasic.All",
    "type": "Application",
    "id": "693c5e45-0940-467d-9b8a-1022fb9d42ef"
  },
  {
    "scope": "Mail.ReadBasic.Shared",
    "type": "Delegated",
    "id": "b11fa0e7-fdb7-4dc9-b1f1-59facd463480"
  },
  {
    "scope": "Mail.ReadWrite",
    "type": "Delegated",
    "id": "024d486e-b451-40bb-833d-3e66d98c5c73"
  },
  {
    "scope": "Mail.ReadWrite",
    "type": "Application",
    "id": "e2a3a72e-5f79-4c64-b1b1-878b674786c9"
  },
  {
    "scope": "Mail.ReadWrite.Shared",
    "type": "Delegated",
    "id": "5df07973-7d5d-46ed-9847-1271055cbd51"
  },
  {
    "scope": "Mail.Send",
    "type": "Delegated",
    "id": "e383f46e-2787-4529-855e-0e479a3ffac0"
  },
  {
    "scope": "Mail.Send",
    "type": "Application",
    "id": "b633e1c5-b582-4048-a93e-9f11b44c7e96"
  },
  {
    "scope": "Mail.Send.Shared",
    "type": "Delegated",
    "id": "a367ab51-6b49-43bf-a716-a1fb06d2a174"
  },
  {
    "scope": "MailboxSettings.Read",
    "type": "Delegated",
    "id": "87f447af-9fa4-4c32-9dfa-4a57a73d18ce"
  },
  {
    "scope": "MailboxSettings.Read",
    "type": "Application",
    "id": "40f97065-369a-49f4-947c-6a255697ae91"
  },
  {
    "scope": "MailboxSettings.ReadWrite",
    "type": "Delegated",
    "id": "818c620a-27a9-40bd-a6a5-d96f7d610b4b"
  },
  {
    "scope": "MailboxSettings.ReadWrite",
    "type": "Application",
    "id": "6931bccd-447a-43d1-b442-00a195474933"
  },
  {
    "scope": "ManagedTenants.Read.All",
    "type": "Delegated",
    "id": "dc34164e-6c4a-41a0-be89-3ae2fbad7cd3"
  },
  {
    "scope": "ManagedTenants.ReadWrite.All",
    "type": "Delegated",
    "id": "b31fa710-c9b3-4d9e-8f5e-8036eecddab9"
  },
  {
    "scope": "Member.Read.Hidden",
    "type": "Delegated",
    "id": "f6a3db3e-f7e8-4ed2-a414-557c8c9830be"
  },
  {
    "scope": "Member.Read.Hidden",
    "type": "Application",
    "id": "658aa5d8-239f-45c4-aa12-864f4fc7e490"
  },
  {
    "scope": "NetworkAccessBranch.Read.All",
    "type": "Delegated",
    "id": "4051c7fc-b429-4804-8d80-8f1f8c24a6f7"
  },
  {
    "scope": "NetworkAccessBranch.Read.All",
    "type": "Application",
    "id": "39ae4a24-1ef0-49e8-9d63-2a66f5c39edd"
  },
  {
    "scope": "NetworkAccessBranch.ReadWrite.All",
    "type": "Delegated",
    "id": "b8a36cc2-b810-461a-baa4-a7281e50bd5c"
  },
  {
    "scope": "NetworkAccessBranch.ReadWrite.All",
    "type": "Application",
    "id": "8137102d-ec16-4191-aaf8-7aeda8026183"
  },
  {
    "scope": "NetworkAccessPolicy.Read.All",
    "type": "Delegated",
    "id": "ba22922b-752c-446f-89d7-a2d92398fceb"
  },
  {
    "scope": "NetworkAccessPolicy.Read.All",
    "type": "Application",
    "id": "8a3d36bf-cb46-4bcc-bec9-8d92829dab84"
  },
  {
    "scope": "NetworkAccessPolicy.ReadWrite.All",
    "type": "Delegated",
    "id": "b1fbad0f-ef6e-42ed-8676-bca7fa3e7291"
  },
  {
    "scope": "NetworkAccessPolicy.ReadWrite.All",
    "type": "Application",
    "id": "f0c341be-8348-4989-8e43-660324294538"
  },
  {
    "scope": "Notes.Create",
    "type": "Delegated",
    "id": "9d822255-d64d-4b7a-afdb-833b9a97ed02"
  },
  {
    "scope": "Notes.Read",
    "type": "Delegated",
    "id": "371361e4-b9e2-4a3f-8315-2a301a3b0a3d"
  },
  {
    "scope": "Notes.Read.All",
    "type": "Delegated",
    "id": "dfabfca6-ee36-4db2-8208-7a28381419b3"
  },
  {
    "scope": "Notes.Read.All",
    "type": "Application",
    "id": "3aeca27b-ee3a-4c2b-8ded-80376e2134a4"
  },
  {
    "scope": "Notes.ReadWrite",
    "type": "Delegated",
    "id": "615e26af-c38a-4150-ae3e-c3b0d4cb1d6a"
  },
  {
    "scope": "Notes.ReadWrite.All",
    "type": "Delegated",
    "id": "64ac0503-b4fa-45d9-b544-71a463f05da0"
  },
  {
    "scope": "Notes.ReadWrite.All",
    "type": "Application",
    "id": "0c458cef-11f3-48c2-a568-c66751c238c0"
  },
  {
    "scope": "Notes.ReadWrite.CreatedByApp",
    "type": "Delegated",
    "id": "ed68249d-017c-4df5-9113-e684c7f8760b"
  },
  {
    "scope": "Notifications.ReadWrite.CreatedByApp",
    "type": "Delegated",
    "id": "89497502-6e42-46a2-8cb2-427fd3df970a"
  },
  {
    "scope": "offline_access",
    "type": "Delegated",
    "id": "7427e0e9-2fba-42fe-b0c0-848c9e6a8182"
  },
  {
    "scope": "OnlineMeetingArtifact.Read.All",
    "type": "Delegated",
    "id": "110e5abb-a10c-4b59-8b55-9b4daa4ef743"
  },
  {
    "scope": "OnlineMeetingArtifact.Read.All",
    "type": "Application",
    "id": "df01ed3b-eb61-4eca-9965-6b3d789751b2"
  },
  {
    "scope": "OnlineMeetingRecording.Read.All",
    "type": "Delegated",
    "id": "190c2bb6-1fdd-4fec-9aa2-7d571b5e1fe3"
  },
  {
    "scope": "OnlineMeetingRecording.Read.All",
    "type": "Application",
    "id": "a4a08342-c95d-476b-b943-97e100569c8d"
  },
  {
    "scope": "OnlineMeetings.Read",
    "type": "Delegated",
    "id": "9be106e1-f4e3-4df5-bdff-e4bc531cbe43"
  },
  {
    "scope": "OnlineMeetings.Read.All",
    "type": "Application",
    "id": "c1684f21-1984-47fa-9d61-2dc8c296bb70"
  },
  {
    "scope": "OnlineMeetings.ReadWrite",
    "type": "Delegated",
    "id": "a65f2972-a4f8-4f5e-afd7-69ccb046d5dc"
  },
  {
    "scope": "OnlineMeetings.ReadWrite.All",
    "type": "Application",
    "id": "b8bb2037-6e08-44ac-a4ea-4674e010e2a4"
  },
  {
    "scope": "OnlineMeetingTranscript.Read.All",
    "type": "Delegated",
    "id": "30b87d18-ebb1-45db-97f8-82ccb1f0190c"
  },
  {
    "scope": "OnlineMeetingTranscript.Read.All",
    "type": "Application",
    "id": "a4a80d8d-d283-4bd8-8504-555ec3870630"
  },
  {
    "scope": "OnPremDirectorySynchronization.Read.All",
    "type": "Delegated",
    "id": "f6609722-4100-44eb-b747-e6ca0536989d"
  },
  {
    "scope": "OnPremDirectorySynchronization.ReadWrite.All",
    "type": "Delegated",
    "id": "c2d95988-7604-4ba1-aaed-38a5f82a51c7"
  },
  {
    "scope": "OnPremisesPublishingProfiles.ReadWrite.All",
    "type": "Delegated",
    "id": "8c4d5184-71c2-4bf8-bb9d-bc3378c9ad42"
  },
  {
    "scope": "OnPremisesPublishingProfiles.ReadWrite.All",
    "type": "Application",
    "id": "0b57845e-aa49-4e6f-8109-ce654fffa618"
  },
  {
    "scope": "openid",
    "type": "Delegated",
    "id": "37f7f235-527c-4136-accd-4a02d197296e"
  },
  {
    "scope": "Organization.Read.All",
    "type": "Delegated",
    "id": "4908d5b9-3fb2-4b1e-9336-1888b7937185"
  },
  {
    "scope": "Organization.Read.All",
    "type": "Application",
    "id": "498476ce-e0fe-48b0-b801-37ba7e2685c6"
  },
  {
    "scope": "Organization.ReadWrite.All",
    "type": "Delegated",
    "id": "46ca0847-7e6b-426e-9775-ea810a948356"
  },
  {
    "scope": "Organization.ReadWrite.All",
    "type": "Application",
    "id": "292d869f-3427-49a8-9dab-8c70152b74e9"
  },
  {
    "scope": "OrgContact.Read.All",
    "type": "Delegated",
    "id": "08432d1b-5911-483c-86df-7980af5cdee0"
  },
  {
    "scope": "OrgContact.Read.All",
    "type": "Application",
    "id": "e1a88a34-94c4-4418-be12-c87b00e26bea"
  },
  {
    "scope": "People.Read",
    "type": "Delegated",
    "id": "ba47897c-39ec-4d83-8086-ee8256fa737d"
  },
  {
    "scope": "People.Read.All",
    "type": "Delegated",
    "id": "b89f9189-71a5-4e70-b041-9887f0bc7e4a"
  },
  {
    "scope": "People.Read.All",
    "type": "Application",
    "id": "b528084d-ad10-4598-8b93-929746b4d7d6"
  },
  {
    "scope": "Place.Read.All",
    "type": "Delegated",
    "id": "cb8f45a0-5c2e-4ea1-b803-84b870a7d7ec"
  },
  {
    "scope": "Place.Read.All",
    "type": "Application",
    "id": "913b9306-0ce1-42b8-9137-6a7df690a760"
  },
  {
    "scope": "Place.ReadWrite.All",
    "type": "Delegated",
    "id": "4c06a06a-098a-4063-868e-5dfee3827264"
  },
  {
    "scope": "Policy.Read.All",
    "type": "Delegated",
    "id": "572fea84-0151-49b2-9301-11cb16974376"
  },
  {
    "scope": "Policy.Read.All",
    "type": "Application",
    "id": "246dd0d5-5bd0-4def-940b-0421030a5b68"
  },
  {
    "scope": "Policy.Read.ConditionalAccess",
    "type": "Delegated",
    "id": "633e0fce-8c58-4cfb-9495-12bbd5a24f7c"
  },
  {
    "scope": "Policy.Read.ConditionalAccess",
    "type": "Application",
    "id": "37730810-e9ba-4e46-b07e-8ca78d182097"
  },
  {
    "scope": "Policy.Read.PermissionGrant",
    "type": "Delegated",
    "id": "414de6ea-2d92-462f-b120-6e2a809a6d01"
  },
  {
    "scope": "Policy.Read.PermissionGrant",
    "type": "Application",
    "id": "9e640839-a198-48fb-8b9a-013fd6f6cbcd"
  },
  {
    "scope": "Policy.ReadWrite.AccessReview",
    "type": "Delegated",
    "id": "4f5bc9c8-ea54-4772-973a-9ca119cb0409"
  },
  {
    "scope": "Policy.ReadWrite.AccessReview",
    "type": "Application",
    "id": "77c863fd-06c0-47ce-a7eb-49773e89d319"
  },
  {
    "scope": "Policy.ReadWrite.ApplicationConfiguration",
    "type": "Delegated",
    "id": "b27add92-efb2-4f16-84f5-8108ba77985c"
  },
  {
    "scope": "Policy.ReadWrite.ApplicationConfiguration",
    "type": "Application",
    "id": "be74164b-cff1-491c-8741-e671cb536e13"
  },
  {
    "scope": "Policy.ReadWrite.AuthenticationFlows",
    "type": "Delegated",
    "id": "edb72de9-4252-4d03-a925-451deef99db7"
  },
  {
    "scope": "Policy.ReadWrite.AuthenticationFlows",
    "type": "Application",
    "id": "25f85f3c-f66c-4205-8cd5-de92dd7f0cec"
  },
  {
    "scope": "Policy.ReadWrite.AuthenticationMethod",
    "type": "Delegated",
    "id": "7e823077-d88e-468f-a337-e18f1f0e6c7c"
  },
  {
    "scope": "Policy.ReadWrite.AuthenticationMethod",
    "type": "Application",
    "id": "29c18626-4985-4dcd-85c0-193eef327366"
  },
  {
    "scope": "Policy.ReadWrite.Authorization",
    "type": "Delegated",
    "id": "edd3c878-b384-41fd-95ad-e7407dd775be"
  },
  {
    "scope": "Policy.ReadWrite.Authorization",
    "type": "Application",
    "id": "fb221be6-99f2-473f-bd32-01c6a0e9ca3b"
  },
  {
    "scope": "Policy.ReadWrite.ConditionalAccess",
    "type": "Delegated",
    "id": "ad902697-1014-4ef5-81ef-2b4301988e8c"
  },
  {
    "scope": "Policy.ReadWrite.ConditionalAccess",
    "type": "Application",
    "id": "01c0a623-fc9b-48e9-b794-0756f8e8f067"
  },
  {
    "scope": "Policy.ReadWrite.ConsentRequest",
    "type": "Delegated",
    "id": "4d135e65-66b8-41a8-9f8b-081452c91774"
  },
  {
    "scope": "Policy.ReadWrite.ConsentRequest",
    "type": "Application",
    "id": "999f8c63-0a38-4f1b-91fd-ed1947bdd1a9"
  },
  {
    "scope": "Policy.ReadWrite.CrossTenantAccess",
    "type": "Delegated",
    "id": "014b43d0-6ed4-4fc6-84dc-4b6f7bae7d85"
  },
  {
    "scope": "Policy.ReadWrite.CrossTenantAccess",
    "type": "Application",
    "id": "338163d7-f101-4c92-94ba-ca46fe52447c"
  },
  {
    "scope": "Policy.ReadWrite.DeviceConfiguration",
    "type": "Delegated",
    "id": "40b534c3-9552-4550-901b-23879c90bcf9"
  },
  {
    "scope": "Policy.ReadWrite.ExternalIdentities",
    "type": "Delegated",
    "id": "b5219784-1215-45b5-b3f1-88fe1081f9c0"
  },
  {
    "scope": "Policy.ReadWrite.ExternalIdentities",
    "type": "Application",
    "id": "03cc4f92-788e-4ede-b93f-199424d144a5"
  },
  {
    "scope": "Policy.ReadWrite.FeatureRollout",
    "type": "Delegated",
    "id": "92a38652-f13b-4875-bc77-6e1dbb63e1b2"
  },
  {
    "scope": "Policy.ReadWrite.FeatureRollout",
    "type": "Application",
    "id": "2044e4f1-e56c-435b-925c-44cd8f6ba89a"
  },
  {
    "scope": "Policy.ReadWrite.MobilityManagement",
    "type": "Delegated",
    "id": "a8ead177-1889-4546-9387-f25e658e2a79"
  },
  {
    "scope": "Policy.ReadWrite.PermissionGrant",
    "type": "Delegated",
    "id": "2672f8bb-fd5e-42e0-85e1-ec764dd2614e"
  },
  {
    "scope": "Policy.ReadWrite.PermissionGrant",
    "type": "Application",
    "id": "a402ca1c-2696-4531-972d-6e5ee4aa11ea"
  },
  {
    "scope": "Policy.ReadWrite.SecurityDefaults",
    "type": "Delegated",
    "id": "0b2a744c-2abf-4f1e-ad7e-17a087e2be99"
  },
  {
    "scope": "Policy.ReadWrite.SecurityDefaults",
    "type": "Application",
    "id": "1c6e93a6-28e2-4cbb-9f64-1a46a821124d"
  },
  {
    "scope": "Policy.ReadWrite.TrustFramework",
    "type": "Delegated",
    "id": "cefba324-1a70-4a6e-9c1d-fd670b7ae392"
  },
  {
    "scope": "Policy.ReadWrite.TrustFramework",
    "type": "Application",
    "id": "79a677f7-b79d-40d0-a36a-3e6f8688dd7a"
  },
  {
    "scope": "POP.AccessAsUser.All",
    "type": "Delegated",
    "id": "d7b7f2d9-0f45-4ea1-9d42-e50810c06991"
  },
  {
    "scope": "Presence.Read",
    "type": "Delegated",
    "id": "76bc735e-aecd-4a1d-8b4c-2b915deabb79"
  },
  {
    "scope": "Presence.Read.All",
    "type": "Delegated",
    "id": "9c7a330d-35b3-4aa1-963d-cb2b9f927841"
  },
  {
    "scope": "Presence.ReadWrite",
    "type": "Delegated",
    "id": "8d3c54a7-cf58-4773-bf81-c0cd6ad522bb"
  },
  {
    "scope": "Presence.ReadWrite.All",
    "type": "Application",
    "id": "83cded22-8297-4ff6-a7fa-e97e9545a259"
  },
  {
    "scope": "PrintConnector.Read.All",
    "type": "Delegated",
    "id": "d69c2d6d-4f72-4f99-a6b9-663e32f8cf68"
  },
  {
    "scope": "PrintConnector.ReadWrite.All",
    "type": "Delegated",
    "id": "79ef9967-7d59-4213-9c64-4b10687637d8"
  },
  {
    "scope": "Printer.Create",
    "type": "Delegated",
    "id": "90c30bed-6fd1-4279-bf39-714069619721"
  },
  {
    "scope": "Printer.FullControl.All",
    "type": "Delegated",
    "id": "93dae4bd-43a1-4a23-9a1a-92957e1d9121"
  },
  {
    "scope": "Printer.Read.All",
    "type": "Delegated",
    "id": "3a736c8a-018e-460a-b60c-863b2683e8bf"
  },
  {
    "scope": "Printer.Read.All",
    "type": "Application",
    "id": "9709bb33-4549-49d4-8ed9-a8f65e45bb0f"
  },
  {
    "scope": "Printer.ReadWrite.All",
    "type": "Delegated",
    "id": "89f66824-725f-4b8f-928e-e1c5258dc565"
  },
  {
    "scope": "Printer.ReadWrite.All",
    "type": "Application",
    "id": "f5b3f73d-6247-44df-a74c-866173fddab0"
  },
  {
    "scope": "PrinterShare.Read.All",
    "type": "Delegated",
    "id": "ed11134d-2f3f-440d-a2e1-411efada2502"
  },
  {
    "scope": "PrinterShare.ReadBasic.All",
    "type": "Delegated",
    "id": "5fa075e9-b951-4165-947b-c63396ff0a37"
  },
  {
    "scope": "PrinterShare.ReadWrite.All",
    "type": "Delegated",
    "id": "06ceea37-85e2-40d7-bec3-91337a46038f"
  },
  {
    "scope": "PrintJob.Create",
    "type": "Delegated",
    "id": "21f0d9c0-9f13-48b3-94e0-b6b231c7d320"
  },
  {
    "scope": "PrintJob.Manage.All",
    "type": "Application",
    "id": "58a52f47-9e36-4b17-9ebe-ce4ef7f3e6c8"
  },
  {
    "scope": "PrintJob.Read",
    "type": "Delegated",
    "id": "248f5528-65c0-4c88-8326-876c7236df5e"
  },
  {
    "scope": "PrintJob.Read.All",
    "type": "Delegated",
    "id": "afdd6933-a0d8-40f7-bd1a-b5d778e8624b"
  },
  {
    "scope": "PrintJob.Read.All",
    "type": "Application",
    "id": "ac6f956c-edea-44e4-bd06-64b1b4b9aec9"
  },
  {
    "scope": "PrintJob.ReadBasic",
    "type": "Delegated",
    "id": "6a71a747-280f-4670-9ca0-a9cbf882b274"
  },
  {
    "scope": "PrintJob.ReadBasic.All",
    "type": "Delegated",
    "id": "04ce8d60-72ce-4867-85cf-6d82f36922f3"
  },
  {
    "scope": "PrintJob.ReadBasic.All",
    "type": "Application",
    "id": "fbf67eee-e074-4ef7-b965-ab5ce1c1f689"
  },
  {
    "scope": "PrintJob.ReadWrite",
    "type": "Delegated",
    "id": "b81dd597-8abb-4b3f-a07a-820b0316ed04"
  },
  {
    "scope": "PrintJob.ReadWrite.All",
    "type": "Delegated",
    "id": "036b9544-e8c5-46ef-900a-0646cc42b271"
  },
  {
    "scope": "PrintJob.ReadWrite.All",
    "type": "Application",
    "id": "5114b07b-2898-4de7-a541-53b0004e2e13"
  },
  {
    "scope": "PrintJob.ReadWriteBasic",
    "type": "Delegated",
    "id": "6f2d22f2-1cb6-412c-a17c-3336817eaa82"
  },
  {
    "scope": "PrintJob.ReadWriteBasic.All",
    "type": "Delegated",
    "id": "3a0db2f6-0d2a-4c19-971b-49109b19ad3d"
  },
  {
    "scope": "PrintJob.ReadWriteBasic.All",
    "type": "Application",
    "id": "57878358-37f4-4d3a-8c20-4816e0d457b1"
  },
  {
    "scope": "PrintSettings.Read.All",
    "type": "Delegated",
    "id": "490f32fd-d90f-4dd7-a601-ff6cdc1a3f6c"
  },
  {
    "scope": "PrintSettings.Read.All",
    "type": "Application",
    "id": "b5991872-94cf-4652-9765-29535087c6d8"
  },
  {
    "scope": "PrintSettings.ReadWrite.All",
    "type": "Delegated",
    "id": "9ccc526a-c51c-4e5c-a1fd-74726ef50b8f"
  },
  {
    "scope": "PrintTaskDefinition.ReadWrite.All",
    "type": "Application",
    "id": "456b71a7-0ee0-4588-9842-c123fcc8f664"
  },
  {
    "scope": "PrivilegedAccess.Read.AzureAD",
    "type": "Delegated",
    "id": "b3a539c9-59cb-4ad5-825a-041ddbdc2bdb"
  },
  {
    "scope": "PrivilegedAccess.Read.AzureAD",
    "type": "Application",
    "id": "4cdc2547-9148-4295-8d11-be0db1391d6b"
  },
  {
    "scope": "PrivilegedAccess.Read.AzureADGroup",
    "type": "Delegated",
    "id": "d329c81c-20ad-4772-abf9-3f6fdb7e5988"
  },
  {
    "scope": "PrivilegedAccess.Read.AzureADGroup",
    "type": "Application",
    "id": "01e37dc9-c035-40bd-b438-b2879c4870a6"
  },
  {
    "scope": "PrivilegedAccess.Read.AzureResources",
    "type": "Delegated",
    "id": "1d89d70c-dcac-4248-b214-903c457af83a"
  },
  {
    "scope": "PrivilegedAccess.Read.AzureResources",
    "type": "Application",
    "id": "5df6fe86-1be0-44eb-b916-7bd443a71236"
  },
  {
    "scope": "PrivilegedAccess.ReadWrite.AzureAD",
    "type": "Delegated",
    "id": "3c3c74f5-cdaa-4a97-b7e0-4e788bfcfb37"
  },
  {
    "scope": "PrivilegedAccess.ReadWrite.AzureAD",
    "type": "Application",
    "id": "854d9ab1-6657-4ec8-be45-823027bcd009"
  },
  {
    "scope": "PrivilegedAccess.ReadWrite.AzureADGroup",
    "type": "Delegated",
    "id": "32531c59-1f32-461f-b8df-6f8a3b89f73b"
  },
  {
    "scope": "PrivilegedAccess.ReadWrite.AzureADGroup",
    "type": "Application",
    "id": "2f6817f8-7b12-4f0f-bc18-eeaf60705a9e"
  },
  {
    "scope": "PrivilegedAccess.ReadWrite.AzureResources",
    "type": "Delegated",
    "id": "a84a9652-ffd3-496e-a991-22ba5529156a"
  },
  {
    "scope": "PrivilegedAccess.ReadWrite.AzureResources",
    "type": "Application",
    "id": "6f9d5abc-2db6-400b-a267-7de22a40fb87"
  },
  {
    "scope": "profile",
    "type": "Delegated",
    "id": "14dad69e-099b-42c9-810b-d002981feec1"
  },
  {
    "scope": "ProgramControl.Read.All",
    "type": "Delegated",
    "id": "c492a2e1-2f8f-4caa-b076-99bbf6e40fe4"
  },
  {
    "scope": "ProgramControl.Read.All",
    "type": "Application",
    "id": "eedb7fdd-7539-4345-a38b-4839e4a84cbd"
  },
  {
    "scope": "ProgramControl.ReadWrite.All",
    "type": "Delegated",
    "id": "50fd364f-9d93-4ae1-b170-300e87cccf84"
  },
  {
    "scope": "ProgramControl.ReadWrite.All",
    "type": "Application",
    "id": "60a901ed-09f7-4aa5-a16e-7dd3d6f9de36"
  },
  {
    "scope": "QnA.Read.All",
    "type": "Delegated",
    "id": "f73fa04f-b9a5-4df9-8843-993ce928925e"
  },
  {
    "scope": "QnA.Read.All",
    "type": "Application",
    "id": "ee49e170-1dd1-4030-b44c-61ad6e98f743"
  },
  {
    "scope": "RecordsManagement.Read.All",
    "type": "Delegated",
    "id": "07f995eb-fc67-4522-ad66-2b8ca8ea3efd"
  },
  {
    "scope": "RecordsManagement.Read.All",
    "type": "Application",
    "id": "ac3a2b8e-03a3-4da9-9ce0-cbe28bf1accd"
  },
  {
    "scope": "RecordsManagement.ReadWrite.All",
    "type": "Delegated",
    "id": "f2833d75-a4e6-40ab-86d4-6dfe73c97605"
  },
  {
    "scope": "RecordsManagement.ReadWrite.All",
    "type": "Application",
    "id": "eb158f57-df43-4751-8b21-b8932adb3d34"
  },
  {
    "scope": "Reports.Read.All",
    "type": "Delegated",
    "id": "02e97553-ed7b-43d0-ab3c-f8bace0d040c"
  },
  {
    "scope": "Reports.Read.All",
    "type": "Application",
    "id": "230c1aed-a721-4c5d-9cb4-a90514e508ef"
  },
  {
    "scope": "ReportSettings.Read.All",
    "type": "Delegated",
    "id": "84fac5f4-33a9-4100-aa38-a20c6d29e5e7"
  },
  {
    "scope": "ReportSettings.Read.All",
    "type": "Application",
    "id": "ee353f83-55ef-4b78-82da-555bfa2b4b95"
  },
  {
    "scope": "ReportSettings.ReadWrite.All",
    "type": "Delegated",
    "id": "b955410e-7715-4a88-a940-dfd551018df3"
  },
  {
    "scope": "ReportSettings.ReadWrite.All",
    "type": "Application",
    "id": "2a60023f-3219-47ad-baa4-40e17cd02a1d"
  },
  {
    "scope": "RoleAssignmentSchedule.Read.Directory",
    "type": "Delegated",
    "id": "344a729c-0285-42c6-9014-f12b9b8d6129"
  },
  {
    "scope": "RoleAssignmentSchedule.ReadWrite.Directory",
    "type": "Delegated",
    "id": "8c026be3-8e26-4774-9372-8d5d6f21daff"
  },
  {
    "scope": "RoleEligibilitySchedule.Read.Directory",
    "type": "Delegated",
    "id": "eb0788c2-6d4e-4658-8c9e-c0fb8053f03d"
  },
  {
    "scope": "RoleEligibilitySchedule.ReadWrite.Directory",
    "type": "Delegated",
    "id": "62ade113-f8e0-4bf9-a6ba-5acb31db32fd"
  },
  {
    "scope": "RoleManagement.Read.All",
    "type": "Delegated",
    "id": "48fec646-b2ba-4019-8681-8eb31435aded"
  },
  {
    "scope": "RoleManagement.Read.All",
    "type": "Application",
    "id": "c7fbd983-d9aa-4fa7-84b8-17382c103bc4"
  },
  {
    "scope": "RoleManagement.Read.CloudPC",
    "type": "Delegated",
    "id": "9619b88a-8a25-48a7-9571-d23be0337a79"
  },
  {
    "scope": "RoleManagement.Read.CloudPC",
    "type": "Application",
    "id": "031a549a-bb80-49b6-8032-2068448c6a3c"
  },
  {
    "scope": "RoleManagement.Read.Directory",
    "type": "Delegated",
    "id": "741c54c3-0c1e-44a1-818b-3f97ab4e8c83"
  },
  {
    "scope": "RoleManagement.Read.Directory",
    "type": "Application",
    "id": "483bed4a-2ad3-4361-a73b-c83ccdbdc53c"
  },
  {
    "scope": "RoleManagement.ReadWrite.CloudPC",
    "type": "Delegated",
    "id": "501d06f8-07b8-4f18-b5c6-c191a4af7a82"
  },
  {
    "scope": "RoleManagement.ReadWrite.CloudPC",
    "type": "Application",
    "id": "274d0592-d1b6-44bd-af1d-26d259bcb43a"
  },
  {
    "scope": "RoleManagement.ReadWrite.Directory",
    "type": "Delegated",
    "id": "d01b97e9-cbc0-49fe-810a-750afd5527a3"
  },
  {
    "scope": "RoleManagement.ReadWrite.Directory",
    "type": "Application",
    "id": "9e3f62cf-ca93-4989-b6ce-bf83c28f9fe8"
  },
  {
    "scope": "RoleManagementAlert.Read.Directory",
    "type": "Delegated",
    "id": "cce71173-f76d-446e-97ff-efb2d82e11b1"
  },
  {
    "scope": "RoleManagementAlert.Read.Directory",
    "type": "Application",
    "id": "ef31918f-2d50-4755-8943-b8638c0a077e"
  },
  {
    "scope": "RoleManagementAlert.ReadWrite.Directory",
    "type": "Delegated",
    "id": "435644c6-a5b1-40bf-8f52-fe8e5b53e19c"
  },
  {
    "scope": "RoleManagementAlert.ReadWrite.Directory",
    "type": "Application",
    "id": "11059518-d6a6-4851-98ed-509268489c4a"
  },
  {
    "scope": "RoleManagementPolicy.Read.Directory",
    "type": "Delegated",
    "id": "3de2cdbe-0ff5-47d5-bdee-7f45b4749ead"
  },
  {
    "scope": "RoleManagementPolicy.ReadWrite.Directory",
    "type": "Delegated",
    "id": "1ff1be21-34eb-448c-9ac9-ce1f506b2a68"
  },
  {
    "scope": "Schedule.Read.All",
    "type": "Delegated",
    "id": "fccf6dd8-5706-49fa-811f-69e2e1b585d0"
  },
  {
    "scope": "Schedule.Read.All",
    "type": "Application",
    "id": "7b2ebf90-d836-437f-b90d-7b62722c4456"
  },
  {
    "scope": "Schedule.ReadWrite.All",
    "type": "Delegated",
    "id": "63f27281-c9d9-4f29-94dd-6942f7f1feb0"
  },
  {
    "scope": "Schedule.ReadWrite.All",
    "type": "Application",
    "id": "b7760610-0545-4e8a-9ec3-cce9e63db01c"
  },
  {
    "scope": "SearchConfiguration.Read.All",
    "type": "Delegated",
    "id": "7d307522-aa38-4cd0-bd60-90c6f0ac50bd"
  },
  {
    "scope": "SearchConfiguration.Read.All",
    "type": "Application",
    "id": "ada977a5-b8b1-493b-9a91-66c206d76ecf"
  },
  {
    "scope": "SearchConfiguration.ReadWrite.All",
    "type": "Delegated",
    "id": "b1a7d408-cab0-47d2-a2a5-a74a3733600d"
  },
  {
    "scope": "SearchConfiguration.ReadWrite.All",
    "type": "Application",
    "id": "0e778b85-fefa-466d-9eec-750569d92122"
  },
  {
    "scope": "SecurityActions.Read.All",
    "type": "Delegated",
    "id": "1638cddf-07a4-4de2-8645-69c96cacad73"
  },
  {
    "scope": "SecurityActions.Read.All",
    "type": "Application",
    "id": "5e0edab9-c148-49d0-b423-ac253e121825"
  },
  {
    "scope": "SecurityActions.ReadWrite.All",
    "type": "Delegated",
    "id": "dc38509c-b87d-4da0-bd92-6bec988bac4a"
  },
  {
    "scope": "SecurityActions.ReadWrite.All",
    "type": "Application",
    "id": "f2bf083f-0179-402a-bedb-b2784de8a49b"
  },
  {
    "scope": "SecurityAlert.Read.All",
    "type": "Delegated",
    "id": "bc257fb8-46b4-4b15-8713-01e91bfbe4ea"
  },
  {
    "scope": "SecurityAlert.Read.All",
    "type": "Application",
    "id": "472e4a4d-bb4a-4026-98d1-0b0d74cb74a5"
  },
  {
    "scope": "SecurityAlert.ReadWrite.All",
    "type": "Delegated",
    "id": "471f2a7f-2a42-4d45-a2bf-594d0838070d"
  },
  {
    "scope": "SecurityAlert.ReadWrite.All",
    "type": "Application",
    "id": "ed4fca05-be46-441f-9803-1873825f8fdb"
  },
  {
    "scope": "SecurityEvents.Read.All",
    "type": "Delegated",
    "id": "64733abd-851e-478a-bffb-e47a14b18235"
  },
  {
    "scope": "SecurityEvents.Read.All",
    "type": "Application",
    "id": "bf394140-e372-4bf9-a898-299cfc7564e5"
  },
  {
    "scope": "SecurityEvents.ReadWrite.All",
    "type": "Delegated",
    "id": "6aedf524-7e1c-45a7-bd76-ded8cab8d0fc"
  },
  {
    "scope": "SecurityEvents.ReadWrite.All",
    "type": "Application",
    "id": "d903a879-88e0-4c09-b0c9-82f6a1333f84"
  },
  {
    "scope": "SecurityIncident.Read.All",
    "type": "Delegated",
    "id": "b9abcc4f-94fc-4457-9141-d20ce80ec952"
  },
  {
    "scope": "SecurityIncident.Read.All",
    "type": "Application",
    "id": "45cc0394-e837-488b-a098-1918f48d186c"
  },
  {
    "scope": "SecurityIncident.ReadWrite.All",
    "type": "Delegated",
    "id": "128ca929-1a19-45e6-a3b8-435ec44a36ba"
  },
  {
    "scope": "SecurityIncident.ReadWrite.All",
    "type": "Application",
    "id": "34bf0e97-1971-4929-b999-9e2442d941d7"
  },
  {
    "scope": "ServiceHealth.Read.All",
    "type": "Delegated",
    "id": "55896846-df78-47a7-aa94-8d3d4442ca7f"
  },
  {
    "scope": "ServiceHealth.Read.All",
    "type": "Application",
    "id": "79c261e0-fe76-4144-aad5-bdc68fbe4037"
  },
  {
    "scope": "ServiceMessage.Read.All",
    "type": "Delegated",
    "id": "eda39fa6-f8cf-4c3c-a909-432c683e4c9b"
  },
  {
    "scope": "ServiceMessage.Read.All",
    "type": "Application",
    "id": "1b620472-6534-4fe6-9df2-4680e8aa28ec"
  },
  {
    "scope": "ServiceMessageViewpoint.Write",
    "type": "Delegated",
    "id": "636e1b0b-1cc2-4b1c-9aa9-4eeed9b9761b"
  },
  {
    "scope": "ServicePrincipalEndpoint.Read.All",
    "type": "Delegated",
    "id": "9f9ce928-e038-4e3b-8faf-7b59049a8ddc"
  },
  {
    "scope": "ServicePrincipalEndpoint.Read.All",
    "type": "Application",
    "id": "5256681e-b7f6-40c0-8447-2d9db68797a0"
  },
  {
    "scope": "ServicePrincipalEndpoint.ReadWrite.All",
    "type": "Delegated",
    "id": "7297d82c-9546-4aed-91df-3d4f0a9b3ff0"
  },
  {
    "scope": "ServicePrincipalEndpoint.ReadWrite.All",
    "type": "Application",
    "id": "89c8469c-83ad-45f7-8ff2-6e3d4285709e"
  },
  {
    "scope": "SharePointTenantSettings.Read.All",
    "type": "Delegated",
    "id": "2ef70e10-5bfd-4ede-a5f6-67720500b258"
  },
  {
    "scope": "SharePointTenantSettings.Read.All",
    "type": "Application",
    "id": "83d4163d-a2d8-4d3b-9695-4ae3ca98f888"
  },
  {
    "scope": "SharePointTenantSettings.ReadWrite.All",
    "type": "Delegated",
    "id": "aa07f155-3612-49b8-a147-6c590df35536"
  },
  {
    "scope": "SharePointTenantSettings.ReadWrite.All",
    "type": "Application",
    "id": "19b94e34-907c-4f43-bde9-38b1909ed408"
  },
  {
    "scope": "ShortNotes.Read",
    "type": "Delegated",
    "id": "50f66e47-eb56-45b7-aaa2-75057d9afe08"
  },
  {
    "scope": "ShortNotes.Read.All",
    "type": "Application",
    "id": "0c7d31ec-31ca-4f58-b6ec-9950b6b0de69"
  },
  {
    "scope": "ShortNotes.ReadWrite",
    "type": "Delegated",
    "id": "328438b7-4c01-4c07-a840-e625a749bb89"
  },
  {
    "scope": "ShortNotes.ReadWrite.All",
    "type": "Application",
    "id": "842c284c-763d-4a97-838d-79787d129bab"
  },
  {
    "scope": "Sites.FullControl.All",
    "type": "Delegated",
    "id": "5a54b8b3-347c-476d-8f8e-42d5c7424d29"
  },
  {
    "scope": "Sites.FullControl.All",
    "type": "Application",
    "id": "a82116e5-55eb-4c41-a434-62fe8a61c773"
  },
  {
    "scope": "Sites.Manage.All",
    "type": "Delegated",
    "id": "65e50fdc-43b7-4915-933e-e8138f11f40a"
  },
  {
    "scope": "Sites.Manage.All",
    "type": "Application",
    "id": "0c0bf378-bf22-4481-8f81-9e89a9b4960a"
  },
  {
    "scope": "Sites.Read.All",
    "type": "Delegated",
    "id": "205e70e5-aba6-4c52-a976-6d2d46c48043"
  },
  {
    "scope": "Sites.Read.All",
    "type": "Application",
    "id": "332a536c-c7ef-4017-ab91-336970924f0d"
  },
  {
    "scope": "Sites.ReadWrite.All",
    "type": "Delegated",
    "id": "89fe6a52-be36-487e-b7d8-d061c450a026"
  },
  {
    "scope": "Sites.ReadWrite.All",
    "type": "Application",
    "id": "9492366f-7969-46a4-8d15-ed1a20078fff"
  },
  {
    "scope": "Sites.Selected",
    "type": "Application",
    "id": "883ea226-0bf2-4a8f-9f9d-92c9162a727d"
  },
  {
    "scope": "SMTP.Send",
    "type": "Delegated",
    "id": "258f6531-6087-4cc4-bb90-092c5fb3ed3f"
  },
  {
    "scope": "SubjectRightsRequest.Read.All",
    "type": "Delegated",
    "id": "9c3af74c-fd0f-4db4-b17a-71939e2a9d77"
  },
  {
    "scope": "SubjectRightsRequest.Read.All",
    "type": "Application",
    "id": "ee1460f0-368b-4153-870a-4e1ca7e72c42"
  },
  {
    "scope": "SubjectRightsRequest.ReadWrite.All",
    "type": "Delegated",
    "id": "2b8fcc74-bce1-4ae3-a0e8-60c53739299d"
  },
  {
    "scope": "SubjectRightsRequest.ReadWrite.All",
    "type": "Application",
    "id": "8387eaa4-1a3c-41f5-b261-f888138e6041"
  },
  {
    "scope": "Subscription.Read.All",
    "type": "Delegated",
    "id": "5f88184c-80bb-4d52-9ff2-757288b2e9b7"
  },
  {
    "scope": "Synchronization.Read.All",
    "type": "Delegated",
    "id": "7aa02aeb-824f-4fbe-a3f7-611f751f5b55"
  },
  {
    "scope": "Synchronization.Read.All",
    "type": "Application",
    "id": "5ba43d2f-fa88-4db2-bd1c-a67c5f0fb1ce"
  },
  {
    "scope": "Synchronization.ReadWrite.All",
    "type": "Delegated",
    "id": "7bb27fa3-ea8f-4d67-a916-87715b6188bd"
  },
  {
    "scope": "Synchronization.ReadWrite.All",
    "type": "Application",
    "id": "9b50c33d-700f-43b1-b2eb-87e89b703581"
  },
  {
    "scope": "Tasks.Read",
    "type": "Delegated",
    "id": "f45671fb-e0fe-4b4b-be20-3d3ce43f1bcb"
  },
  {
    "scope": "Tasks.Read.All",
    "type": "Application",
    "id": "f10e1f91-74ed-437f-a6fd-d6ae88e26c1f"
  },
  {
    "scope": "Tasks.Read.Shared",
    "type": "Delegated",
    "id": "88d21fd4-8e5a-4c32-b5e2-4a1c95f34f72"
  },
  {
    "scope": "Tasks.ReadWrite",
    "type": "Delegated",
    "id": "2219042f-cab5-40cc-b0d2-16b1540b4c5f"
  },
  {
    "scope": "Tasks.ReadWrite.All",
    "type": "Application",
    "id": "44e666d1-d276-445b-a5fc-8815eeb81d55"
  },
  {
    "scope": "Tasks.ReadWrite.Shared",
    "type": "Delegated",
    "id": "c5ddf11b-c114-4886-8558-8a4e557cd52b"
  },
  {
    "scope": "Team.Create",
    "type": "Delegated",
    "id": "7825d5d6-6049-4ce7-bdf6-3b8d53f4bcd0"
  },
  {
    "scope": "Team.Create",
    "type": "Application",
    "id": "23fc2474-f741-46ce-8465-674744c5c361"
  },
  {
    "scope": "Team.ReadBasic.All",
    "type": "Delegated",
    "id": "485be79e-c497-4b35-9400-0e3fa7f2a5d4"
  },
  {
    "scope": "Team.ReadBasic.All",
    "type": "Application",
    "id": "2280dda6-0bfd-44ee-a2f4-cb867cfc4c1e"
  },
  {
    "scope": "TeamMember.Read.All",
    "type": "Delegated",
    "id": "2497278c-d82d-46a2-b1ce-39d4cdde5570"
  },
  {
    "scope": "TeamMember.Read.All",
    "type": "Application",
    "id": "660b7406-55f1-41ca-a0ed-0b035e182f3e"
  },
  {
    "scope": "TeamMember.ReadWrite.All",
    "type": "Delegated",
    "id": "4a06efd2-f825-4e34-813e-82a57b03d1ee"
  },
  {
    "scope": "TeamMember.ReadWrite.All",
    "type": "Application",
    "id": "0121dc95-1b9f-4aed-8bac-58c5ac466691"
  },
  {
    "scope": "TeamMember.ReadWriteNonOwnerRole.All",
    "type": "Delegated",
    "id": "2104a4db-3a2f-4ea0-9dba-143d457dc666"
  },
  {
    "scope": "TeamMember.ReadWriteNonOwnerRole.All",
    "type": "Application",
    "id": "4437522e-9a86-4a41-a7da-e380edd4a97d"
  },
  {
    "scope": "TeamsActivity.Read",
    "type": "Delegated",
    "id": "0e755559-83fb-4b44-91d0-4cc721b9323e"
  },
  {
    "scope": "TeamsActivity.Read.All",
    "type": "Application",
    "id": "70dec828-f620-4914-aa83-a29117306807"
  },
  {
    "scope": "TeamsActivity.Send",
    "type": "Delegated",
    "id": "7ab1d787-bae7-4d5d-8db6-37ea32df9186"
  },
  {
    "scope": "TeamsActivity.Send",
    "type": "Application",
    "id": "a267235f-af13-44dc-8385-c1dc93023186"
  },
  {
    "scope": "TeamsAppInstallation.ReadForChat",
    "type": "Delegated",
    "id": "bf3fbf03-f35f-4e93-963e-47e4d874c37a"
  },
  {
    "scope": "TeamsAppInstallation.ReadForChat.All",
    "type": "Application",
    "id": "cc7e7635-2586-41d6-adaa-a8d3bcad5ee5"
  },
  {
    "scope": "TeamsAppInstallation.ReadForTeam",
    "type": "Delegated",
    "id": "5248dcb1-f83b-4ec3-9f4d-a4428a961a72"
  },
  {
    "scope": "TeamsAppInstallation.ReadForTeam.All",
    "type": "Application",
    "id": "1f615aea-6bf9-4b05-84bd-46388e138537"
  },
  {
    "scope": "TeamsAppInstallation.ReadForUser",
    "type": "Delegated",
    "id": "c395395c-ff9a-4dba-bc1f-8372ba9dca84"
  },
  {
    "scope": "TeamsAppInstallation.ReadForUser.All",
    "type": "Application",
    "id": "9ce09611-f4f7-4abd-a629-a05450422a97"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentForChat",
    "type": "Delegated",
    "id": "e1408a66-8f82-451b-a2f3-3c3e38f7413f"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentForChat.All",
    "type": "Application",
    "id": "6e74eff9-4a21-45d6-bc03-3a20f61f8281"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentForTeam",
    "type": "Delegated",
    "id": "946349d5-2a9d-4535-abc0-7beeacaedd1d"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentForTeam.All",
    "type": "Application",
    "id": "b0c13be0-8e20-4bc5-8c55-963c23a39ce9"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentSelfForChat",
    "type": "Delegated",
    "id": "a0e0e18b-8fb2-458f-8130-da2d7cab9c75"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentSelfForChat.All",
    "type": "Application",
    "id": "ba1ba90b-2d8f-487e-9f16-80728d85bb5c"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentSelfForTeam",
    "type": "Delegated",
    "id": "4a6bbf29-a0e1-4a4d-a7d1-cef17f772975"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteAndConsentSelfForTeam.All",
    "type": "Application",
    "id": "1e4be56c-312e-42b8-a2c9-009600d732c0"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteForChat",
    "type": "Delegated",
    "id": "aa85bf13-d771-4d5d-a9e6-bca04ce44edf"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteForChat.All",
    "type": "Application",
    "id": "9e19bae1-2623-4c4f-ab6e-2664615ff9a0"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteForTeam",
    "type": "Delegated",
    "id": "2e25a044-2580-450d-8859-42eeb6e996c0"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteForTeam.All",
    "type": "Application",
    "id": "5dad17ba-f6cc-4954-a5a2-a0dcc95154f0"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteForUser",
    "type": "Delegated",
    "id": "093f8818-d05f-49b8-95bc-9d2a73e9a43c"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteForUser.All",
    "type": "Application",
    "id": "74ef0291-ca83-4d02-8c7e-d2391e6a444f"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteSelfForChat",
    "type": "Delegated",
    "id": "0ce33576-30e8-43b7-99e5-62f8569a4002"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteSelfForChat.All",
    "type": "Application",
    "id": "73a45059-f39c-4baf-9182-4954ac0e55cf"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteSelfForTeam",
    "type": "Delegated",
    "id": "0f4595f7-64b1-4e13-81bc-11a249df07a9"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteSelfForTeam.All",
    "type": "Application",
    "id": "9f67436c-5415-4e7f-8ac1-3014a7132630"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteSelfForUser",
    "type": "Delegated",
    "id": "207e0cb1-3ce7-4922-b991-5a760c346ebc"
  },
  {
    "scope": "TeamsAppInstallation.ReadWriteSelfForUser.All",
    "type": "Application",
    "id": "908de74d-f8b2-4d6b-a9ed-2a17b3b78179"
  },
  {
    "scope": "TeamSettings.Read.All",
    "type": "Delegated",
    "id": "48638b3c-ad68-4383-8ac4-e6880ee6ca57"
  },
  {
    "scope": "TeamSettings.Read.All",
    "type": "Application",
    "id": "242607bd-1d2c-432c-82eb-bdb27baa23ab"
  },
  {
    "scope": "TeamSettings.ReadWrite.All",
    "type": "Delegated",
    "id": "39d65650-9d3e-4223-80db-a335590d027e"
  },
  {
    "scope": "TeamSettings.ReadWrite.All",
    "type": "Application",
    "id": "bdd80a03-d9bc-451d-b7c4-ce7c63fe3c8f"
  },
  {
    "scope": "TeamsTab.Create",
    "type": "Delegated",
    "id": "a9ff19c2-f369-4a95-9a25-ba9d460efc8e"
  },
  {
    "scope": "TeamsTab.Create",
    "type": "Application",
    "id": "49981c42-fd7b-4530-be03-e77b21aed25e"
  },
  {
    "scope": "TeamsTab.Read.All",
    "type": "Delegated",
    "id": "59dacb05-e88d-4c13-a684-59f1afc8cc98"
  },
  {
    "scope": "TeamsTab.Read.All",
    "type": "Application",
    "id": "46890524-499a-4bb2-ad64-1476b4f3e1cf"
  },
  {
    "scope": "TeamsTab.ReadWrite.All",
    "type": "Delegated",
    "id": "b98bfd41-87c6-45cc-b104-e2de4f0dafb9"
  },
  {
    "scope": "TeamsTab.ReadWrite.All",
    "type": "Application",
    "id": "a96d855f-016b-47d7-b51c-1218a98d791c"
  },
  {
    "scope": "TeamsTab.ReadWriteForChat",
    "type": "Delegated",
    "id": "ee928332-e9c2-4747-b4a0-f8c164b68de6"
  },
  {
    "scope": "TeamsTab.ReadWriteForChat.All",
    "type": "Application",
    "id": "fd9ce730-a250-40dc-bd44-8dc8d20f39ea"
  },
  {
    "scope": "TeamsTab.ReadWriteForTeam",
    "type": "Delegated",
    "id": "c975dd04-a06e-4fbb-9704-62daad77bb49"
  },
  {
    "scope": "TeamsTab.ReadWriteForTeam.All",
    "type": "Application",
    "id": "6163d4f4-fbf8-43da-a7b4-060fe85ed148"
  },
  {
    "scope": "TeamsTab.ReadWriteForUser",
    "type": "Delegated",
    "id": "c37c9b61-7762-4bff-a156-afc0005847a0"
  },
  {
    "scope": "TeamsTab.ReadWriteForUser.All",
    "type": "Application",
    "id": "425b4b59-d5af-45c8-832f-bb0b7402348a"
  },
  {
    "scope": "TeamsTab.ReadWriteSelfForChat",
    "type": "Delegated",
    "id": "0c219d04-3abf-47f7-912d-5cca239e90e6"
  },
  {
    "scope": "TeamsTab.ReadWriteSelfForChat.All",
    "type": "Application",
    "id": "9f62e4a2-a2d6-4350-b28b-d244728c4f86"
  },
  {
    "scope": "TeamsTab.ReadWriteSelfForTeam",
    "type": "Delegated",
    "id": "f266662f-120a-4314-b26a-99b08617c7ef"
  },
  {
    "scope": "TeamsTab.ReadWriteSelfForTeam.All",
    "type": "Application",
    "id": "91c32b81-0ef0-453f-a5c7-4ce2e562f449"
  },
  {
    "scope": "TeamsTab.ReadWriteSelfForUser",
    "type": "Delegated",
    "id": "395dfec1-a0b9-465f-a783-8250a430cb8c"
  },
  {
    "scope": "TeamsTab.ReadWriteSelfForUser.All",
    "type": "Application",
    "id": "3c42dec6-49e8-4a0a-b469-36cff0d9da93"
  },
  {
    "scope": "TeamTemplates.Read",
    "type": "Delegated",
    "id": "cd87405c-5792-4f15-92f7-debc0db6d1d6"
  },
  {
    "scope": "TeamTemplates.Read.All",
    "type": "Application",
    "id": "6323133e-1f6e-46d4-9372-ac33a0870636"
  },
  {
    "scope": "Teamwork.Migrate.All",
    "type": "Application",
    "id": "dfb0dd15-61de-45b2-be36-d6a69fba3c79"
  },
  {
    "scope": "TeamworkAppSettings.Read.All",
    "type": "Delegated",
    "id": "44e060c4-bbdc-4256-a0b9-dcc0396db368"
  },
  {
    "scope": "TeamworkAppSettings.Read.All",
    "type": "Application",
    "id": "475ebe88-f071-4bd7-af2b-642952bd4986"
  },
  {
    "scope": "TeamworkAppSettings.ReadWrite.All",
    "type": "Delegated",
    "id": "87c556f0-2bd9-4eed-bd74-5dd8af6eaf7e"
  },
  {
    "scope": "TeamworkAppSettings.ReadWrite.All",
    "type": "Application",
    "id": "ab5b445e-8f10-45f4-9c79-dd3f8062cc4e"
  },
  {
    "scope": "TeamworkDevice.Read.All",
    "type": "Delegated",
    "id": "b659488b-9d28-4208-b2be-1c6652b3c970"
  },
  {
    "scope": "TeamworkDevice.Read.All",
    "type": "Application",
    "id": "0591bafd-7c1c-4c30-a2a5-2b9aacb1dfe8"
  },
  {
    "scope": "TeamworkDevice.ReadWrite.All",
    "type": "Delegated",
    "id": "ddd97ecb-5c31-43db-a235-0ee20e635c40"
  },
  {
    "scope": "TeamworkDevice.ReadWrite.All",
    "type": "Application",
    "id": "79c02f5b-bd4f-4713-bc2c-a8a4a66e127b"
  },
  {
    "scope": "TeamworkTag.Read",
    "type": "Delegated",
    "id": "57587d0b-8399-45be-b207-8050cec54575"
  },
  {
    "scope": "TeamworkTag.Read.All",
    "type": "Application",
    "id": "b74fd6c4-4bde-488e-9695-eeb100e4907f"
  },
  {
    "scope": "TeamworkTag.ReadWrite",
    "type": "Delegated",
    "id": "539dabd7-b5b6-4117-b164-d60cd15a8671"
  },
  {
    "scope": "TeamworkTag.ReadWrite.All",
    "type": "Application",
    "id": "a3371ca5-911d-46d6-901c-42c8c7a937d8"
  },
  {
    "scope": "TermStore.Read.All",
    "type": "Delegated",
    "id": "297f747b-0005-475b-8fef-c890f5152b38"
  },
  {
    "scope": "TermStore.Read.All",
    "type": "Application",
    "id": "ea047cc2-df29-4f3e-83a3-205de61501ca"
  },
  {
    "scope": "TermStore.ReadWrite.All",
    "type": "Delegated",
    "id": "6c37c71d-f50f-4bff-8fd3-8a41da390140"
  },
  {
    "scope": "TermStore.ReadWrite.All",
    "type": "Application",
    "id": "f12eb8d6-28e3-46e6-b2c0-b7e4dc69fc95"
  },
  {
    "scope": "ThreatAssessment.Read.All",
    "type": "Application",
    "id": "f8f035bb-2cce-47fb-8bf5-7baf3ecbee48"
  },
  {
    "scope": "ThreatAssessment.ReadWrite.All",
    "type": "Delegated",
    "id": "cac97e40-6730-457d-ad8d-4852fddab7ad"
  },
  {
    "scope": "ThreatHunting.Read.All",
    "type": "Delegated",
    "id": "b152eca8-ea73-4a48-8c98-1a6742673d99"
  },
  {
    "scope": "ThreatHunting.Read.All",
    "type": "Application",
    "id": "dd98c7f5-2d42-42d3-a0e4-633161547251"
  },
  {
    "scope": "ThreatIndicators.Read.All",
    "type": "Delegated",
    "id": "9cc427b4-2004-41c5-aa22-757b755e9796"
  },
  {
    "scope": "ThreatIndicators.Read.All",
    "type": "Application",
    "id": "197ee4e9-b993-4066-898f-d6aecc55125b"
  },
  {
    "scope": "ThreatIndicators.ReadWrite.OwnedBy",
    "type": "Delegated",
    "id": "91e7d36d-022a-490f-a748-f8e011357b42"
  },
  {
    "scope": "ThreatIndicators.ReadWrite.OwnedBy",
    "type": "Application",
    "id": "21792b6c-c986-4ffc-85de-df9da54b52fa"
  },
  {
    "scope": "ThreatSubmission.Read",
    "type": "Delegated",
    "id": "fd5353c6-26dd-449f-a565-c4e16b9fce78"
  },
  {
    "scope": "ThreatSubmission.Read.All",
    "type": "Delegated",
    "id": "7083913a-4966-44b6-9886-c5822a5fd910"
  },
  {
    "scope": "ThreatSubmission.Read.All",
    "type": "Application",
    "id": "86632667-cd15-4845-ad89-48a88e8412e1"
  },
  {
    "scope": "ThreatSubmission.ReadWrite",
    "type": "Delegated",
    "id": "68a3156e-46c9-443c-b85c-921397f082b5"
  },
  {
    "scope": "ThreatSubmission.ReadWrite.All",
    "type": "Delegated",
    "id": "8458e264-4eb9-4922-abe9-768d58f13c7f"
  },
  {
    "scope": "ThreatSubmission.ReadWrite.All",
    "type": "Application",
    "id": "d72bdbf4-a59b-405c-8b04-5995895819ac"
  },
  {
    "scope": "ThreatSubmissionPolicy.ReadWrite.All",
    "type": "Delegated",
    "id": "059e5840-5353-4c68-b1da-666a033fc5e8"
  },
  {
    "scope": "ThreatSubmissionPolicy.ReadWrite.All",
    "type": "Application",
    "id": "926a6798-b100-4a20-a22f-a4918f13951d"
  },
  {
    "scope": "TrustFrameworkKeySet.Read.All",
    "type": "Delegated",
    "id": "7ad34336-f5b1-44ce-8682-31d7dfcd9ab9"
  },
  {
    "scope": "TrustFrameworkKeySet.Read.All",
    "type": "Application",
    "id": "fff194f1-7dce-4428-8301-1badb5518201"
  },
  {
    "scope": "TrustFrameworkKeySet.ReadWrite.All",
    "type": "Delegated",
    "id": "39244520-1e7d-4b4a-aee0-57c65826e427"
  },
  {
    "scope": "TrustFrameworkKeySet.ReadWrite.All",
    "type": "Application",
    "id": "4a771c9a-1cf2-4609-b88e-3d3e02d539cd"
  },
  {
    "scope": "UnifiedGroupMember.Read.AsGuest",
    "type": "Delegated",
    "id": "73e75199-7c3e-41bb-9357-167164dbb415"
  },
  {
    "scope": "User.Export.All",
    "type": "Delegated",
    "id": "405a51b5-8d8d-430b-9842-8be4b0e9f324"
  },
  {
    "scope": "User.Export.All",
    "type": "Application",
    "id": "405a51b5-8d8d-430b-9842-8be4b0e9f324"
  },
  {
    "scope": "User.Invite.All",
    "type": "Delegated",
    "id": "63dd7cd9-b489-4adf-a28c-ac38b9a0f962"
  },
  {
    "scope": "User.Invite.All",
    "type": "Application",
    "id": "09850681-111b-4a89-9bed-3f2cae46d706"
  },
  {
    "scope": "User.ManageIdentities.All",
    "type": "Delegated",
    "id": "637d7bec-b31e-4deb-acc9-24275642a2c9"
  },
  {
    "scope": "User.ManageIdentities.All",
    "type": "Application",
    "id": "c529cfca-c91b-489c-af2b-d92990b66ce6"
  },
  {
    "scope": "User.Read",
    "type": "Delegated",
    "id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d"
  },
  {
    "scope": "User.Read.All",
    "type": "Delegated",
    "id": "a154be20-db9c-4678-8ab7-66f6cc099a59"
  },
  {
    "scope": "User.Read.All",
    "type": "Application",
    "id": "df021288-bdef-4463-88db-98f22de89214"
  },
  {
    "scope": "User.ReadBasic.All",
    "type": "Delegated",
    "id": "b340eb25-3456-403f-be2f-af7a0d370277"
  },
  {
    "scope": "User.ReadBasic.All",
    "type": "Application",
    "id": "97235f07-e226-4f63-ace3-39588e11d3a1"
  },
  {
    "scope": "User.ReadWrite",
    "type": "Delegated",
    "id": "b4e74841-8e56-480b-be8b-910348b18b4c"
  },
  {
    "scope": "User.ReadWrite.All",
    "type": "Delegated",
    "id": "204e0828-b5ca-4ad8-b9f3-f32a958e7cc4"
  },
  {
    "scope": "User.ReadWrite.All",
    "type": "Application",
    "id": "741f803b-c850-494e-b5df-cde7c675a1ca"
  },
  {
    "scope": "UserActivity.ReadWrite.CreatedByApp",
    "type": "Delegated",
    "id": "47607519-5fb1-47d9-99c7-da4b48f369b1"
  },
  {
    "scope": "UserAuthenticationMethod.Read",
    "type": "Delegated",
    "id": "1f6b61c5-2f65-4135-9c9f-31c0f8d32b52"
  },
  {
    "scope": "UserAuthenticationMethod.Read.All",
    "type": "Delegated",
    "id": "aec28ec7-4d02-4e8c-b864-50163aea77eb"
  },
  {
    "scope": "UserAuthenticationMethod.Read.All",
    "type": "Application",
    "id": "38d9df27-64da-44fd-b7c5-a6fbac20248f"
  },
  {
    "scope": "UserAuthenticationMethod.ReadWrite",
    "type": "Delegated",
    "id": "48971fc1-70d7-4245-af77-0beb29b53ee2"
  },
  {
    "scope": "UserAuthenticationMethod.ReadWrite.All",
    "type": "Delegated",
    "id": "b7887744-6746-4312-813d-72daeaee7e2d"
  },
  {
    "scope": "UserAuthenticationMethod.ReadWrite.All",
    "type": "Application",
    "id": "50483e42-d915-4231-9639-7fdb7fd190e5"
  },
  {
    "scope": "User-LifeCycleInfo.Read.All",
    "type": "Delegated",
    "id": "ed8d2a04-0374-41f1-aefe-da8ac87ccc87"
  },
  {
    "scope": "User-LifeCycleInfo.Read.All",
    "type": "Application",
    "id": "8556a004-db57-4d7a-8b82-97a13428e96f"
  },
  {
    "scope": "User-LifeCycleInfo.ReadWrite.All",
    "type": "Delegated",
    "id": "7ee7473e-bd4b-4c9f-987c-bd58481f5fa2"
  },
  {
    "scope": "User-LifeCycleInfo.ReadWrite.All",
    "type": "Application",
    "id": "925f1248-0f97-47b9-8ec8-538c54e01325"
  },
  {
    "scope": "UserNotification.ReadWrite.CreatedByApp",
    "type": "Delegated",
    "id": "26e2f3e8-b2a1-47fc-9620-89bb5b042024"
  },
  {
    "scope": "UserNotification.ReadWrite.CreatedByApp",
    "type": "Application",
    "id": "4e774092-a092-48d1-90bd-baad67c7eb47"
  },
  {
    "scope": "UserShiftPreferences.Read.All",
    "type": "Application",
    "id": "de023814-96df-4f53-9376-1e2891ef5a18"
  },
  {
    "scope": "UserShiftPreferences.ReadWrite.All",
    "type": "Application",
    "id": "d1eec298-80f3-49b0-9efb-d90e224798ac"
  },
  {
    "scope": "UserTimelineActivity.Write.CreatedByApp",
    "type": "Delegated",
    "id": "367492fc-594d-4972-a9b5-0d58c622c91c"
  },
  {
    "scope": "VirtualAppointment.Read",
    "type": "Delegated",
    "id": "27470298-d3b8-4b9c-aad4-6334312a3eac"
  },
  {
    "scope": "VirtualAppointment.Read.All",
    "type": "Application",
    "id": "d4f67ec2-59b5-4bdc-b4af-d78f6f9c1954"
  },
  {
    "scope": "VirtualAppointment.ReadWrite",
    "type": "Delegated",
    "id": "2ccc2926-a528-4b17-b8bb-860eed29d64c"
  },
  {
    "scope": "VirtualAppointment.ReadWrite.All",
    "type": "Application",
    "id": "bf46a256-f47d-448f-ab78-f226fff08d40"
  },
  {
    "scope": "WindowsUpdates.ReadWrite.All",
    "type": "Delegated",
    "id": "11776c0c-6138-4db3-a668-ee621bea2555"
  },
  {
    "scope": "WindowsUpdates.ReadWrite.All",
    "type": "Application",
    "id": "7dd1be58-6e76-4401-bf8d-31d1e8180d5b"
  },
  {
    "scope": "WorkforceIntegration.Read.All",
    "type": "Delegated",
    "id": "f1ccd5a7-6383-466a-8db8-1a656f7d06fa"
  },
  {
    "scope": "WorkforceIntegration.ReadWrite.All",
    "type": "Delegated",
    "id": "08c4b377-0d23-4a8b-be2a-23c1c1d88545"
  },
  {
    "scope": "WorkforceIntegration.ReadWrite.All",
    "type": "Application",
    "id": "202bf709-e8e6-478e-bcfd-5d63c50b68e3"
  }
] as const;

/**
 * @see https://learn.microsoft.com/en-us/azure/active-directory/develop/scopes-oidc#openid-connect-scopes
 * @see https://learn.microsoft.com/en-us/graph/permissions-reference#all-permissions-and-ids
 */
export type MicrosoftScope = typeof ValidScopes[number]["scope"];
