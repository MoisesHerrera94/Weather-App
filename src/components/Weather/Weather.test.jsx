import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'

test("Weather example", async () => {
    const { findByRole } = render(<Weather temperature={10} state="clouds"/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})