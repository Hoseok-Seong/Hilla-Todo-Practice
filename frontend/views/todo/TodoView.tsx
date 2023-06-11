import type Todo from 'Frontend/generated/com/example/application/Todo';
import { useEffect, useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import { Button } from '@hilla/react-components/Button.js';
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { TodoEndpoint } from 'Frontend/generated/endpoints';
import { EndpointValidationError } from '@hilla/frontend';

export default function TodoView() {
    const empty: Todo = { task: '', done: false };
    const [todos, setTodos] = useState(Array<Todo>());

    return (
    );
}
