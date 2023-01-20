export const Contact = ({contacts}) => {
    console.log(contacts)
    return (
      <>
           <li>{contacts.name} {contacts.number}</li>

        {/* <Text>Has job: {hasJob + ''}</Text>
        <Btn onClick={() => deleteUser(id)}>Delete</Btn>
        <Btn onClick={() => changeStatus(id)}>Change job status</Btn> */}
      </>
    );
  };