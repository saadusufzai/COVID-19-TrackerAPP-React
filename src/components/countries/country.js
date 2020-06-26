import React from "react";

import FormControl from "@material-ui/core/FormControl";

import { NativeSelect } from "@material-ui/core";

export default function country({ handelInput, countries }) {
  return (
    <div>
      <FormControl>
        <NativeSelect onChange={handelInput} style={{ width: "100%" }}>
          <option value=""> Countries</option>
          {countries.map((country, i) => (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
