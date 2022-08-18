import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import { StyledSelect } from './styles'
import { ReactNode } from 'react'

interface PropTypes {
  labelId?: string
  name?: string
  type?: string
  id?: string
  value?: string
  label?: 'perfilUsuario'
  onChange?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void
  error?: any
  testid?: string
}

const SelectProfile: React.FC<PropTypes> = ({
  labelId,
  name,
  type,
  id,
  value,
  label,
  onChange,
  error,
  testid
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Perfil do Usuário</InputLabel>
        <StyledSelect
          labelId={labelId}
          name={name}
          type={type}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
          error={error}
          data-testid={testid}>
          <MenuItem value={'Basico'}>Básico</MenuItem>
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Gerente'}>Gerente</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  )
}

export default SelectProfile
