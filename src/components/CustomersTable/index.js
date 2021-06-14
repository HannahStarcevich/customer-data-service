import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import api from 'api';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import EditableText from './EditableText';
function CustomersTable({ customer }) {
//   const updateCustomer = useMutation(({ payload, id }) =>
//     api.update(payload, id)
//   );
  const deleteCustomer = useMutation(id => api.delete(id));
  const queryClient = useQueryClient();
  function handleUpdate(event) {
    const updateCustomer = {
      ...customer.find(
        ({ id }) =>
          id ===
          // Make sure to check as a number!
          Number(event.target.dataset.id)
      ),
      ...{ [event.target.dataset.key]: event.target.value },
    };
    updateCustomer.mutate({
      payload: updateCustomer,
      id: event.target.dataset.id,
    });
  }
  function handleDelete(event) {
    console.log('Gonna delete the record with id ' + event.target.dataset.id);
    deleteCustomer.mutate(event.target.dataset.id, {
      onSuccess: async () => {
        console.log('OK');
        queryClient.invalidateQueries('customer');
      },
    });
  }
  return (
    <Table variant="simple">
      <TableCaption>Click on any data to edit 📝 it.</TableCaption>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Street</Th>
          <Th>City</Th>
          <Th>State</Th>
          <Th>Zip Code</Th>
          <Th>Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        {customer.map(({ id, firstName, lastName, street, city, state, zipcode, level }) => (
          <Tr key={id} data-id={id}>
            <Td>
              <EditableText
                value={firstName}
                handler={handleUpdate}
                recordKey="firstName"
                id={id}
              />
            </Td>
            <Td>
              <EditableText
                value={lastName}
                handler={handleUpdate}
                recordKey="lastName"
                id={id}
              />
            </Td>
            <Td>
              <EditableText
                value={street}
                handler={handleUpdate}
                recordKey="street"
                id={id}
              />
            </Td>
            <Td>
              <EditableText
                value={city}
                handler={handleUpdate}
                recordKey="city"
                id={id}
              />
            </Td>
            <Td>
              <EditableText
                value={state}
                handler={handleUpdate}
                recordKey="state"
                id={id}
              />
            </Td>
            <Td>
              <EditableText
                value={zipcode}
                handler={handleUpdate}
                recordKey="zipcode"
                id={id}
              />
            </Td>
            <Td>
              <EditableText
                value={level}
                handler={handleUpdate}
                recordKey="level"
                id={id}
              />
            </Td>
            <Td>
              <Button
                leftIcon={<DeleteIcon />}
                colorScheme="teal"
                variant="solid"
                size="xs"
                onClick={handleDelete}
                data-id={id}
              >
                Delete 🔥
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

CustomersTable.propTypes = {
  customer: PropTypes.arrayOf(
    PropTypes.exact({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default CustomersTable;