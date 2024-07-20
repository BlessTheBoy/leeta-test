import {createContext, ReactNode, useReducer} from 'react';

export type Address = {
  name: string;
  address: {
    address: string;
    state: string;
    lga?: string;
  };
  phone: string;
  id: string;
};

export type User = {
  id: string;
  name: string;
  image?: string;
  email: string;
  phone: string;
  address: {
    defaultAddressID: string;
    list: Address[];
  };
};

type authContextValue = {
  user?: User | null;
  dispatch?: React.Dispatch<userActions>;
};

export const AuthContext = createContext<authContextValue>({});
AuthContext.displayName = 'AuthContext';

type userActions =
  | {
      type: 'save_details';
      payload: {name: string; email: string; phone: string};
    }
  | {
      type: 'change_default_address';
      payload: string;
    }
  | {
      type: 'edit_address';
      payload: {
        id: string;
        value: Address;
      };
    }
  | {
      type: 'delete_address';
      payload: string;
    }
  | {
      type: 'add_address';
      payload: Address;
    }
  | {
      type: 'add_image';
      payload: string;
    };

function reducer(state: User, action: userActions) {
  switch (action.type) {
    case 'save_details': {
      return {...state, ...action.payload} as User;
    }
    case 'add_image': {
      return {...state, image: action.payload} as User;
    }
    case 'change_default_address': {
      return {
        ...state,
        address: {...state.address, defaultAddressID: action.payload},
      } as User;
    }
    case 'edit_address': {
      return {
        ...state,
        address: {
          ...state.address,
          list: state.address.list.map(address =>
            address.id === action.payload.id ? action.payload.value : address,
          ),
        },
      } as User;
    }
    case 'delete_address': {
      const defaultAddress = state.address.defaultAddressID === action.payload;
      return {
        ...state,
        address: {
          ...state.address,
          defaultAddressID: defaultAddress
            ? state.address.list.find(v => v.id !== action.payload)?.id
            : state.address.defaultAddressID,
          list: state.address.list.filter(
            address => address.id !== action.payload,
          ),
        },
      } as User;
    }
    case 'add_address': {
      return {
        ...state,
        address: {
          ...state.address,
          list: [...state.address.list, action.payload],
        },
      };
    }
    default:
      throw Error('Unknown action.');
  }
}

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, {
    id: '001',
    name: 'Becky Anderson',
    email: 'beckyanderson@gmail.com',
    phone: '0706544487',
    address: {
      defaultAddressID: '1',
      list: [
        {
          name: 'Becky Anderson',
          address: {
            address: 'Plot 234',
            lga: 'ikoyi',
            state: 'Lagos, Nigeria.',
          },
          phone: '+23456789021',
          id: '1',
        },
        {
          name: 'Faruq Anderson',
          address: {
            address: 'Plot 234',
            lga: 'ikoyi',
            state: 'Lagos, Nigeria.',
          },
          phone: '+23456789021',
          id: '2',
        },
      ],
    },
  });

  return (
    <AuthContext.Provider value={{user: state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};
