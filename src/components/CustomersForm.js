import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

import PropTypes from 'prop-types';

function CustomersForm({ handler }) {

  return (
    <form className="flex flex-col gap-4 mb-4" onSubmit={handler}>
      <FormControl id="firstName" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input placeholder="Daenerys" name="firstName" />
      </FormControl>
      <FormControl id="lastName" isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input placeholder="Targaryen" name="lastName" />
      </FormControl>
      <FormControl id="street" isRequired>
        <FormLabel>Street</FormLabel>
        <Input placeholder="P. Sherman 42 Walaby Way" name="street" />
      </FormControl>
      <FormControl id="city" isRequired>
        <FormLabel>City</FormLabel>
        <Input placeholder="Sydney" name="city" />
      </FormControl>
      <FormControl id="state" isRequired>
        <FormLabel>State</FormLabel>
        <Input placeholder="Washington" name="state" />
      </FormControl>
      <FormControl id="zipcode" isRequired>
        <FormLabel>Zipcode</FormLabel>
        <Input placeholder="90210" name="zipcode" />
      </FormControl>
      <FormControl id="level" isRequired>
        <FormLabel>Level</FormLabel>
        <Input placeholder="Gold" name="level" />
      </FormControl>
      <Button colorScheme="green" type="submit" className="max-w-xs">
        Add Customer
      </Button>
    </form>
  );
}
CustomersForm.propTypes = {
  handler: PropTypes.func.isRequired,
};
export default CustomersForm;