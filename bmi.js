function bmi(weight, height) {

    let result = weight / (height * height)
    console.log(result)
    let output = ''
    switch(true) {
        case result <= 18.5:
            output = 'Underweight'
            break
        case result <= 25.0:
            output = 'Normal'
            break
        case result <= 30.0:
            output = 'Overweight'
            break
        case result > 30.0:
            output = 'Obese'
            break
    }
    return output
  }

  console.log(bmi(160, 1.80))