import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PaymentSummary } from './PaymentSummary';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

vi.mock('axios');

describe('Payment Summary componenet', () => {
  let user;
  let loadCart;
  let paymentSummary = {
    "totalItems": 3,
    "productCostCents": 12564,
    "shippingCostCents": 0,
    "totalCostBeforeTaxCents": 12564,
    "taxCents": 1256,
    "totalCostCents": 13820
  }

  beforeEach(() => {
    paymentSummary = {
      "totalItems": 3,
      "productCostCents": 12564,
      "shippingCostCents": 0,
      "totalCostBeforeTaxCents": 12564,
      "taxCents": 1256,
      "totalCostCents": 13820
    };
    
    loadCart = vi.fn();
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );
  });

  it('checks if all payments are rendered correctly', () => {

    expect(
      screen.getByTestId('product-cost')
    ).toHaveTextContent('$125.64')

    expect(
      screen.getByTestId('shipping-cost')
    ).toHaveTextContent('$0.00')

    expect(
      screen.getByTestId('before-tax-cost')
    ).toHaveTextContent('$125.64')

    expect(
      screen.getByTestId('tax-cost')
    ).toHaveTextContent('$12.56')

    expect(
      screen.getByTestId('total-cost')
    ).toHaveTextContent('$138.20')
    
  })
})