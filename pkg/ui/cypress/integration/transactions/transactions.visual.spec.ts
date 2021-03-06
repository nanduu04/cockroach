// Copyright 2020 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

describe("Transactions - Visual regression tests", () => {
  it("renders default view", () => {
    cy.visit("#/transactions");
    cy.contains("Transactions");
    cy.get("table").contains("transactions").contains("latency");
  });
});

describe("Transactions - Check whether the transactions match on the page", () => {
  it("renders default view", () => {
    cy.visit("#/transactions");
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .text-wrapper > .hover-area--1s0Q2"
    ).contains("SELECT FROM");
    cy.get(
      ":nth-child(2) > :nth-child(1) > :nth-child(1) > .text-wrapper > .hover-area--1s0Q2"
    ).contains("UPDATE system.jobs");
    cy.get(
      ":nth-child(2) > :nth-child(1) > :nth-child(1) > .text-wrapper > .hover-area--1s0Q2"
    ).contains("DELETE FROM");
  });
});