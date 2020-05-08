import { useState } from 'react'

export const useInputChange = () => {
    const [form, setForm] = useState({});

    const handleInputChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    return [form , handleInputChange]
}