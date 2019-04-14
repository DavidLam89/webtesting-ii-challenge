import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('increases ball count when ball button hit, reset to 0 when reach 4', () => {
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText(/ball/i);
    fireEvent.click(button);
    expect(queryByTestId('ball-count')).toContainHTML(
      '1');
    fireEvent.click(button);
    expect(queryByTestId('ball-count')).toContainHTML(
      '2');
    fireEvent.click(button);
    expect(queryByTestId('ball-count')).toContainHTML(
      '3');
    fireEvent.click(button);
    expect(queryByTestId('ball-count')).toContainHTML(
      '0');
  });

  it('increases strike count when strike button hit, reset to 0 when reach 3', () => {
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText(/strike/i);
    fireEvent.click(button);
    expect(queryByTestId('strike-count')).toContainHTML(
      '1');
    fireEvent.click(button);
    expect(queryByTestId('strike-count')).toContainHTML(
      '2');
    fireEvent.click(button);
    expect(queryByTestId('strike-count')).toContainHTML(
      '0');
  });

  it('increases strike count when foul button hit, but not when strike count is at 2', () => {
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText(/foul/i);
    fireEvent.click(button);
    expect(queryByTestId('strike-count')).toContainHTML(
      '1');
    fireEvent.click(button);
    expect(queryByTestId('strike-count')).toContainHTML(
      '2');
    fireEvent.click(button);
    expect(queryByTestId('strike-count')).toContainHTML(
      '2');
  });

  it('reset the counts when hit button hit', () => {
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText(/hit/i);
    const ball_button = getByText(/ball/i);
    const strike_button = getByText(/strike/i);
    fireEvent.click(ball_button);
    fireEvent.click(ball_button);
    fireEvent.click(ball_button);
    fireEvent.click(strike_button);
    fireEvent.click(button);
    expect(queryByTestId('ball-count')).toContainHTML(
      '0');
    expect(queryByTestId('strike-count')).toContainHTML(
      '0');
    fireEvent.click(ball_button);
  });

  it('test', () => {
    const { getByText, queryByTestId } = render(<App />);
    const button = getByText(/ball/i);
    fireEvent.click(button);
    expect(queryByTestId('ball-count')).toContainHTML(
      '2');
  });
});
