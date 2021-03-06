// Copyright 2020 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

describe("Statements - Check whether the table content has been rendered properly", () => {
  it("renders default view", () => {
    cy.visit("#/statements");
    cy.contains("Statements");
    cy.get("table").contains("statements").contains("latency");
  });
});

describe("Statements - Check whether the written queries match on the statement page", () => {
  it("Writes some queries and checks them", () => {
    // cy.exec("cockroach start-single-node --insecure --background");
    cy.exec("cockroach workload init movr --drop");
    cy.visit("#/statements");
    // cy.exec("cockroach sql --insecure");
    cy.get(
      ":nth-child(1) > .cl-table__col-query-text--2XHsm > a > :nth-child(1) > .cl-table-link__tooltip-hover-area"
    ).contains("INSERT INTO users");
    cy.get(
      ":nth-child(6) > .cl-table__col-query-text--2XHsm > a > :nth-child(1) > .cl-table-link__tooltip-hover-area"
    ).contains("INSERT INTO rides");
    cy.get(
      ":nth-child(6) > .cl-table__col-query-text--2XHsm > a > :nth-child(1) > .cl-table-link__tooltip-hover-area"
    ).contains("CREATE TABLE IF");
    cy.get(
      ":nth-child(6) > .cl-table__col-query-text--2XHsm > a > :nth-child(1) > .cl-table-link__tooltip-hover-area"
    ).contains("ALTER TABLE vehicles SCATTER FROM");
  });
});

describe.only("Statements - Activate and download the diagnostics", () => {
  it("renders default view", () => {
    cy.exec("cockroach workload init movr --drop");
    cy.visit("#/statements");
    cy.get(
      ":nth-child(1) > :nth-child(7) > .activate-diagnostic-col--1zK-D > .crl-button--m3jEM > .crl-button__container--RRHDx > .crl-button__content--2dOuK"
    ).contains("Activate");
    cy.get(
      ":nth-child(1) > :nth-child(7) > .activate-diagnostic-col--1zK-D > .crl-button--m3jEM > .crl-button__container--RRHDx > .crl-button__content--2dOuK"
    ).click();
    cy.get("#rcDialogTitle0 > .text--umosm").contains(
      "Activate statement diagnostics"
    );
    cy.get(
      ".crl-button--type-primary--1-ilX > .crl-button__container--RRHDx > .crl-button__content--2dOuK"
    ).click();
    cy.reload();

    cy.get(
      ":nth-child(1) > :nth-child(7) > .activate-diagnostic-col--1zK-D > .crl-dropdown--gtuFa > .outside-event-handler--KXoGB > .crl-dropdown__handler > .crl-button--m3jEM > .crl-button__container--RRHDx > .crl-button__icon--2BqVF > svg"
    ).click();
    // cy.get(
    //   ":nth-child(1) > :nth-child(7) > .activate-diagnostic-col--1zK-D > .crl-dropdown--gtuFa > .outside-event-handler--KXoGB > .crl-dropdown__overlay--2rbi8 > .crl-dropdown__menu--25z9F > .crl-dropdown__container--2uLfx > :nth-child(1) > .download-diagnostics-link--3Juig"
    // ).click();
    // cy.reload();
  });
});
