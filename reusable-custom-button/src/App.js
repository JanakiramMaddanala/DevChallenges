import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <div className="btn-block-container">
        <div className="btn-block">
          <label className="btn-block-label">{`<Button />`}</label>
          <Button />
        </div>
      </div>
      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button variant="outline" />`}</label>
          <Button variant="outline" />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button variant="text" />`}</label>
          <Button variant="text" />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button disableShadow />`}</label>
          <Button disableShadow />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button disabled />`}</label>
          <Button disabled />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button variant="text" disabled />`}</label>
          <Button variant="text" disabled />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button startIcon="face" />`}</label>
          <Button startIcon="face" />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button endIcon="face" />`}</label>
          <Button endIcon="face" />
        </div>
        <div class="btn-block">
          <label className="btn-block-label">{`<Button endIcon="face" />`}</label>
          <Button endIcon="face" />
        </div>
        <div class="btn-block">
          <label className="btn-block-label">{`<Button endIcon="face" startIcon="add_shopping_cart" />`}</label>
          <Button endIcon="face" startIcon="add_shopping_cart" />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button size="sm" />`}</label>
          <Button size="sm" />
        </div>
        <div class="btn-block">
          <label className="btn-block-label">{`<Button size="md" />`}</label>
          <Button size="md" />
        </div>
        <div class="btn-block">
          <label className="btn-block-label">{`<Button size="lg" />`}</label>
          <Button size="lg" />
        </div>
      </div>

      <div className="btn-block-container">
        <div class="btn-block">
          <label className="btn-block-label">{`<Button color="primary" />`}</label>
          <Button color="primary" />
        </div>
        <div class="btn-block">
          <label className="btn-block-label">{`<Button color="secondary" />`}</label>
          <Button color="secondary" />
        </div>
        <div class="btn-block">
          <label className="btn-block-label">{`<Button color="danger" />`}</label>
          <Button color="danger" />
        </div>
      </div>
    </div>
  );
};
export default App;
